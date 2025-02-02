'use client'
import React from "react"
import { useState } from "react"
import { Calendar } from "lucide-react"
import { Link } from "lucide-react"

export default function NewDiary() {
    const [diaryDate, setDiaryDate] = useState("2025-02-02");
    const [diaryTitle, setDiaryTitle] = useState("");
    const [diaryContent, setDiaryContent] = useState("");
    return(
        <div className="container mx-auto p-4 min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl">
            <article className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="items-center text-gray-500 pt-4">
                    <label className="text-gray-700 font-semibold">Date</label>
                    <input 
                    type="date" 
                    value={diaryDate} 
                    onChange={(e) => setDiaryDate(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 w-full"
                    />
                </div>
                <div className="mb-4 pt-4">
                    <label className="text-gray-700 font-semibold">Title</label>
                    <input 
                    type="text" 
                    value={diaryTitle} 
                    onChange={(e) => setDiaryTitle(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 w-full"
                    placeholder="タイトルを入力..."
                    />
                </div>
                <div className="mb-4 pt-4">
                    <label className="text-gray-700 font-semibold">Content</label>
                    <textarea 
                    value={diaryContent} 
                    onChange={(e) => setDiaryContent(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 w-full h-32"
                    placeholder="日記の内容を入力..."
                    ></textarea>
                </div>
                <button className="px-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 text-white py-2 rounded-lg font-semibold">
                    保存
                </button>
                
            </article>
        </div>


    )
}