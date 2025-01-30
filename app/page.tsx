import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchTasks = async () => {
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (sessionError || !session || !session.user) {
        setMessage("ログインセッションがありません。ログインしてください。");
        setIsLoading(false);
        router.replace("/components/signin");
        return;
      }
      const user = session.user;

      const { data: tasks, error } = await supabase
        .from("tasks")
        .select("*")
        .eq("user_id", user.id);

      if (error) {
        setMessage("タスクの取得に失敗しました。");
      } else {
        setTasks(tasks); //
      }
      setIsLoading(false);
    };
    fetchTasks();
  }, []);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  return (
    <>
      <h1>日記一覧</h1>
      <div>
        <Link
          href="/components/signup"
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          サインアップ
        </Link>
        <Link
          href="components/signin"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          サインイン
        </Link>
      </div>
    </>
  );
}
