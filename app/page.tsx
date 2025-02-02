'use client'

import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Diary } from './types/diary';
import {Calender} from 'lucide-react'


export default function Home() {
  const [diaries, setDiaries] = useState<Diary[]>([]);

  useEffect(() => {
    const fetchDiaries = async () => {
      const { data, error } = await supabase.from('diaries').select('*').order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching diaries:', error.message || error);
      } else {
        setDiaries(data);
      }
    };

    fetchDiaries();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">日記一覧</h1>
      <Link href="/diary/create">
        <button className="p-2 mt-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 text-white py-2 rounded-lg">日記を作成</button>
      </Link>
      <ul className="mt-4">
        {diaries.map((diary) => (
          <li key={diary.id} className="border p-4 mb-2 flex justify-between items-center ">
            <p>{diary.created_at}</p>
            <Link href={`diary/${diary.id}`} className="font-bold text-blue-500">{diary.title}</Link>
            <p>{diary.content}</p>
          </li>
        ))}
      </ul>
      <article className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2 text-gray-500">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">2024年2月2日</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="inline-block px-3 py-1 text-xs rounded-full bg-violet-100 text-violet-600">
                  私生活
                </span>
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-800 group-hover:text-violet-600 transition-colors mb-3">
              春の訪れ
            </h2>
            <p className="text-gray-600 leading-relaxed line-clamp-3">
              今日は久しぶりに早起きして、近所の公園へ散歩に行きました。
              桜の蕾がほんの少し膨らみ始めていて、春の足音を感じました。
              朝もやの中で聞こえる小鳥のさえずりが、とても心地よかったです。
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
              <span>☀️ 天気: 晴れ</span>
              <span>🌡️ 気分: リラックス</span>
            </div>
          </article>
    </div>
  );
}
