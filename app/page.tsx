'use client'

import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Diary } from './types/diary';


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
      <Link href="/new">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">日記を作成</button>
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
    </div>
  );
}
