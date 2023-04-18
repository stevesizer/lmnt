export default function OurStory() {
  return (
    <article>
      <section className='py-16'>
        <h2 className='text-5xl font-bold text-center'>Our Formulation.</h2>
        <p className='text-center mt-8 max-w-lg text-lg text-gray-800 mx-auto'>
          We let the latest scientific literature make the decisions. Yes, that
          means lots of salt. And no sugar or dodgy ingredients.
        </p>
      </section>
    </article>
  );
}

export const meta = () => {
  return [
    { title: 'Our Formulation | LMNT' },
    {
      name: 'description',
      content:
        'We let the latest scientific literature make the decisions. Yes, that means lots of salt. And no sugar or dodgy ingredients.',
    },
  ];
};
