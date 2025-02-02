'use client'

import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Diary } from './types/diary';
import { Calendar, HandHeart, PencilLine, LogIn, LogOut, SquarePen } from 'lucide-react';
import { useRouter } from 'next/router';


export default function Home() {
  const router = useRouter();
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
      <div className='flex items-center space-x-2 justify-center'>
        <Link href={"/auth/sign-up"}>
          <button  className='py-2 px-4 rounded-lg font-semibold transition-all bg-green-400 text-white'>
            <SquarePen/>
          </button>
        </Link>
        <Link href={"/auth/sign-in"}>
          <button className='py-2 px-4 rounded-lg font-semibold transition-all bg-blue-400 text-white'>
            <LogIn/>
          </button>
        </Link>
        
        <button className='py-2 px-4 rounded-lg font-semibold transition-all bg-red-400 text-white'>
          <LogOut/>
        </button>
      </div>
      
        {/* エラー発生中 => ()=>router.push("/diary/create") */}
        {/* <button onClick={()=> router.push("/diary/create")} className="p-2 mt-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 text-white py-2 rounded-lg flex items-center">
          <PencilLine className="w-4 h-4"/>
          日記を作成
        </button> */}


      <article className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-gray-500">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">
              2025/2/1
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="inline-block px-3 py-1 text-xs rounded-full bg-green-100 text-green-600">
              私生活
            </span>
          </div>
        </div>
        <h2 className="text-xl font-bold text-gray-700 group-hover:text-orange-500 transition-colors mb-3">
          友人とご飯を食べた。
        </h2>
        <p className="text-gray-600 leading-relaxed line-clamp-3">
        久しぶりに高校の同級生と３人でご飯を食べた。
        バカ話もしたし、仕事のことも聞けて楽しかった。
        居心地がいいかつ、負けられないと思える友人だからこそ、大切にしたいと感じた。
        </p>
        <div className="mt-4 pt-4 border-t border-gray-100 items-center justify-between text-sm text-gray-500">
          <div className='flex space-x-2'>
            <HandHeart className='w-4 h-4'/>
            <span>AIコメント</span>
          </div>
          <p>
          いい時間を過ごせたみたいでよかったね！✨ 久しぶりに会う友達とバカ話をしつつ、仕事の話もできるのは最高のバランスだね。居心地が良くて刺激ももらえる友人って本当に貴重だから、大切にしたいという気持ち、すごく共感できる！またこういう時間を大事にしていけるといいね。😊
          </p>
        </div>
      </article>
      
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
              学習
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
