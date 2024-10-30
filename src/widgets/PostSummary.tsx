export function PostSummary({ category, data }) {
  return (
    <div className='max-w-[65ch] mx-auto my-8 flex flex-col items-center justify-center'>
      <p className='rounded-lg bg-cool-gray py-1 px-2 text-[#333] font-bold'>{category}</p>
      <div className='h-2' />
      <p className='text-warm-gray font-bold text-[2.5em]'>{data.title}</p>
      <div className='h-2' />
      <p>{data.createdAt}</p>
      <div className='h-2' />
      <p>{data.description}</p>
    </div>
  );
}
