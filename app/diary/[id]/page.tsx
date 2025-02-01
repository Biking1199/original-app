import React from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { Diary } from "../../types/diary";
import { useState, useEffect } from "react";


export default function DiaryDetail({params}:{params:Promise<{id: string}>}) {
    const [diary, setDiary] = useState<Diary[] | null>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoaging, setIsLoading] = useState<boolean>(true);
    const resolvedParams = React.use(params);

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const { data, error } = await supabase
                    .from("diaries")
                    .select("*")
                    .eq("id", resolvedParams.id)
                    .single();
        
                if (error) {
                    console.error("Error fetching task:", error.message );
                    setError("日記の取得中にエラーが発生しました。");
                    setIsLoading(false);
                    return;
                }
                setDiary(data);
            } catch (err) {
            console.error("Unexpected error:", err);
            } finally {
            setIsLoading(false);
            }
        };
        fetchTask();
        }, [resolvedParams.id]);
        if (!diary) {
            return <div>日記が見つかりませんでした。</div>;
        }

        return(
            <div>
                {diary.map((diary: Diary)=>(
                    <li key={diary.id}>
                        <p className="text-gray-700 mb-2">{diary.created_at}</p>
                        <p className="text-gray-700 mb-2">{diary.title}</p>
                        <p className="text-gray-700 mb-2">{diary.content}</p>
                    </li>
                ))}
            </div>
            


        )
}