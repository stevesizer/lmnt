export default function Science() {
  return (
    <article>
      <section className='py-16'>
        <h2 className='text-5xl font-bold text-center'>Our Story.</h2>
        <p className='text-center mt-8 max-w-lg text-lg text-gray-800 mx-auto'>
          Learn about hydration, electrolytes, nutrition, and more with in-depth
          content supported by the latest scientific literature. Subscribe to
          stay up to date.
        </p>
      </section>
    </article>
  );
}

export const meta = () => {
  return [
    { title: 'Science | LMNT' },
    {
      name: 'description',
      content:
        'Learn about hydration, electrolytes, nutrition, and more with in-depth content supported by the latest scientific literature. Subscribe to stay up to date.',
    },
  ];
};
