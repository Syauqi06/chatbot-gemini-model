import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const GEMINI_MODEL = 'gemini-3.5-flash';
const CEFR_LEVEL_NAMES = {
    A1: 'Beginner',
    A2: 'Elementary',
    B1: 'Intermediate',
    B2: 'Upper Intermediate',
    C1: 'Advanced',
    C2: 'Proficiency'
};

app.use(cors());
app.use(express.json({ limit: '64kb' }));

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server ready on http://localhost:${PORT}`));

app.post('/api/chat', async (req, res) => {
    const { conversation, level = 'A1' } = req.body ?? {};

    if (!Array.isArray(conversation) || conversation.length === 0 || conversation.length > 30) {
        return res.status(400).json({ error: 'Conversation must contain between 1 and 30 messages.' });
    }

    if (!['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].includes(level)) {
        return res.status(400).json({ error: 'Level must be a valid CEFR level from A1 to C2.' });
    }

    const validConversation = conversation.every((message) =>
        message &&
        ['user', 'model'].includes(message.role) &&
        typeof message.text === 'string' &&
        message.text.trim().length > 0 &&
        message.text.length <= 4000
    );

    if (!validConversation || conversation.at(-1).role !== 'user') {
        return res.status(400).json({ error: 'Conversation messages must have a valid role and non-empty text, and end with a user message.' });
    }

    try {
        const contents = conversation.map(({ role, text }) => ({
            role,
            parts: [{ text: text.trim() }]
        }));

        const response = await ai.models.generateContent({
            model: GEMINI_MODEL,
            contents,
            config: {
                systemInstruction: `Anda adalah Lexora, tutor AI IELTS Vocabulary yang ramah, sabar, dan profesional. Level CEFR aktif pengguna adalah ${level} (${CEFR_LEVEL_NAMES[level]}).

Fokus utama Anda adalah membantu pengguna belajar vocabulary bahasa Inggris untuk IELTS melalui percakapan. Anda dapat menjawab dalam bahasa Indonesia atau bahasa Inggris sesuai bahasa pengguna. Sesuaikan kosakata, contoh, kompleksitas penjelasan, dan latihan dengan level aktif. Untuk pemula, gunakan penjelasan sederhana dan terjemahan bahasa Indonesia.

Bantu pengguna mempelajari vocabulary, berlatih terjemahan Indonesia-Inggris, mengevaluasi jawaban, memperbaiki grammar dan pilihan kata, serta memahami academic vocabulary, synonyms, antonyms, collocations, formal/informal usage, dan vocabulary IELTS Writing/Speaking.

Saat mengajarkan kata, sertakan kata bahasa Inggris, arti bahasa Indonesia, pronunciation, part of speech, contoh kalimat natural, dan terjemahannya. Jaga jawaban tetap terstruktur dan mudah dibaca. Jika pengguna sedang berlatih, berikan satu pertanyaan pada satu waktu. Nilai kesesuaian makna dan konteks, terima variasi jawaban yang benar, jelaskan kesalahan dengan ramah, lalu berikan petunjuk atau pertanyaan lanjutan. Jangan mengklaim skor atau kemajuan yang belum dihitung.

Saat menilai jawaban pengguna terhadap pertanyaan latihan yang baru saja Anda berikan, mulai respons dengan tepat satu penanda internal: [ASSESSMENT:CORRECT] atau [ASSESSMENT:INCORRECT]. Pilih berdasarkan makna dan konteks, bukan kecocokan teks persis. Jangan gunakan penanda tersebut di luar penilaian jawaban latihan.

Jika pengguna meminta Vocabulary Book, tampilkan daftar ringkas dan tawarkan untuk membahas kata pilihan mereka. Jika pertanyaan tidak terkait pembelajaran bahasa Inggris atau IELTS, arahkan dengan sopan kembali ke topik tersebut.`,
            }
        });
        if (typeof response.text !== 'string' || !response.text.trim()) {
            return res.status(502).json({ error: 'The AI service returned an empty response. Please try again.' });
        }
        const result = response.text.trim();
        const assessment = result.match(/^\[ASSESSMENT:(CORRECT|INCORRECT)\]\s*/i);
        const cleanedResult = assessment ? result.slice(assessment[0].length).trim() : result;
        if (!cleanedResult) {
            return res.status(502).json({ error: 'The AI service returned an empty response. Please try again.' });
        }
        res.status(200).json({
            result: cleanedResult,
            evaluation: assessment ? assessment[1].toUpperCase() === 'CORRECT' : null,
        });
    } catch (e) {
        console.error('Gemini chat request failed:', e);
        res.status(502).json({ error: 'The AI service could not complete your request. Please try again shortly.' });
    }
});