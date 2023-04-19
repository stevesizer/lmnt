export default function OurStory() {
  return (
    <article>
      <section className='py-16'>
        <h2 className='text-5xl font-bold text-center'>Our Story.</h2>
        <p className='text-center mt-8 max-w-lg text-lg text-gray-800 mx-auto'>
          Health is a process. Our personal experiences and the latest
          scientific literature that underpin the origin story of the LMNT
          brand.
        </p>
      </section>
    </article>
  );
}

export const meta = () => {
  return [
    { title: 'Our Story | LMNT' },
    {
      name: 'description',
      content:
        'Health is a process. Our personal experiences and the latest scientific literature that underpin the origin story of the LMNT brand.',
    },
  ];
};
