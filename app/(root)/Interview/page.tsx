import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold">Choose Interview Type</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Button asChild className="btn-primary p-8 h-auto flex flex-col gap-4">
          <Link href="/interview/generate">
            <h3 className="text-xl font-semibold">Generate New Interview</h3>
            <p className="text-sm opacity-80">
              Let AI create a personalized interview based on your preferences
            </p>
          </Link>
        </Button>

        <Button asChild className="btn-primary p-8 h-auto flex flex-col gap-4">
          <Link href="/">
            <h3 className="text-xl font-semibold">Practice Questions</h3>
            <p className="text-sm opacity-80">
              Practice with our curated list of interview questions
            </p>
          </Link>
        </Button>
      </div>
    </div>
  );
}

