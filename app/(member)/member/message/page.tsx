import { redirect } from "next/navigation"
import { getAuthUser } from "@/lib/nextauth"
import Message from "@/components/message/Message"

const MessagePage = async () => {
  // 認証情報取得
  const user = await getAuthUser()

  if (!user) {
    redirect("/")
  }

  if (!user.companyId) {
    redirect("/")
  }

  return (
    <div className="bg-white border w-full rounded-r-md p-10 h-[850px] flex flex-col">
      <div className="text-xl font-bold border-b border-black pb-5 mb-5">
        管理者
      </div>

      <Message user={user} companyId={user.companyId} />
    </div>
  )
}

export default MessagePage
