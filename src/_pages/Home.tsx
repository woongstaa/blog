import { PageLayout } from '@/shared';

export function Home() {
  return (
    <PageLayout>
      <div className='border border-warm-gray rounded-lg py-8 flex justify-center'>
        <div className='w-40 aspect-square rounded-full border' />
        <div className='w-12' />
        <div className='flex flex-col justify-between'>
          <div className='text-sm'>
            <p>안녕하세요 프론트엔드 개발자 이진웅입니다!</p>
            <p>확장성과 유지보수에 용이한 개발 방법론에 관심이 많습니다.</p>
          </div>
          <div>아이콘</div>
        </div>
      </div>
    </PageLayout>
  );
}
