import { NavigateToHref } from '@/features';

export function Profile() {
  return (
    <div className='flex w-full flex-col justify-center rounded-lg border border-warm-gray py-8 sm:flex-row'>
      <div className='hidden aspect-square w-48 items-center justify-center overflow-hidden rounded-full bg-warm-gray sm:flex'>
        <img src='/profile.webp' alt='' className='ml-5 w-10/12 object-cover' />
      </div>
      {/* mobile device */}
      <div className='mb-4 flex justify-center sm:hidden'>
        <div className='aspect-square w-48 items-center justify-center overflow-hidden rounded-full bg-warm-gray'>
          <img src='/profile.webp' alt='' className='ml-5 w-10/12 object-cover' />
        </div>
      </div>
      <div className='w-4 sm:w-8' />
      <div className='flex flex-col justify-between'>
        <div className='text-center text-sm sm:text-left mb-4 sm:mb-0'>
          <p>안녕하세요, 프론트엔드 개발자 이진웅입니다!</p>
          <p>확장성과 유지보수에 용이한 개발 방법론에 관심이 많습니다.</p>
        </div>
        <div className='flex justify-center sm:justify-end'>
          <NavigateToHref href='https://github.com/woongstaa' isBlank={true}>
            <img src='/github.svg' className='w-4 sm:w-6' />
          </NavigateToHref>
          <div className='w-3' />
          {/* TODO ::: 메일 주소 복사 모달 만들기 */}
          <a href='mailto:sos@babygo.kr'>
            <img src='/gmail.svg' className='w-4 sm:w-6' />
          </a>
          <div className='w-3' />
          <NavigateToHref href='https://www.linkedin.com/in/%EC%A7%84%EC%9B%85-%EC%9D%B4-a6b5ba2a6/' isBlank={true}>
            <img src='/linkedin.svg' className='w-4 sm:w-6' />
          </NavigateToHref>
        </div>
      </div>
    </div>
  );
}
