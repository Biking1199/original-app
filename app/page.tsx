'use client'

import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Diary } from './types/diary';
import { Calendar, HandHeart, PencilLine } from 'lucide-react';


export default function Home() {
  // const [diaries, setDiaries] = useState<Diary[]>([]);

  // useEffect(() => {
  //   const fetchDiaries = async () => {
  //     const { data, error } = await supabase.from('diaries').select('*').order('created_at', { ascending: false });

  //     if (error) {
  //       console.error('Error fetching diaries:', error.message || error);
  //     } else {
  //       setDiaries(data);
  //     }
  //   };

  //   fetchDiaries();
  // }, []);

  return (
    <div className="container mx-auto p-4 min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl">
      
      <Link href="/diary/create">
        <button className="p-2 mt-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 text-white py-2 rounded-lg flex items-center">
          <PencilLine className="w-4 h-4"/>
          日記を作成
        </button>
      </Link>
      
      <article className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-gray-500">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">
              2025/2/2
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="inline-block px-3 py-1 text-xs rounded-full bg-violet-100 text-violet-600">
              私生活
            </span>
          </div>
        </div>
        <h2 className="text-xl font-bold text-gray-700 group-hover:text-orange-500 transition-colors mb-3">
          オリジナルアプリのメインのデザイン作成
        </h2>
        <p className="text-gray-600 leading-relaxed line-clamp-3">
        オリジナルアプリのメイン画面のデザインを作成中。
        なかなかデザインが決まらない。モダンなデザインでシンプルに考えているが、見たことあるようなデザインになってしまう。
        パッとみたとき使いたいとなるデザインを目指したい。
        </p>
        <div className="mt-4 pt-4 border-t border-gray-100 items-center justify-between text-sm text-gray-500">
          <div className='flex space-x-2'>
            <HandHeart className='w-4 h-4'/>
            <span>AIコメント</span>
          </div>
          <p>
            デザイン迷うよね…でも、「見たことあるデザイン」ってことは、それだけ使いやすく洗練されてるってことでもある！
            まずは王道を押さえて、そこに自分らしさを足してみるのもアリかも。
            直感的に「これいい！」と思えるまで試行錯誤してみよう！
          </p>
        </div>
      </article>

      
    </div>
  );
}
