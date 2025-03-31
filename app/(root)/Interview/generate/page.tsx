import Agent from '@/components/Agent';
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
  const user = await getCurrentUser();

  if (!user) {
    return null;
  }

  return (
    <>
        <h3 className="text-2xl font-bold mb-6">Interview Generation</h3>

        <Agent 
          userName={user.name || ''} 
          userId={user.id} 
          type="generate" 
        />
    </>
  )
}

export default Page;


