import citrus_stick from '~/images/lmnt-stick_0009_citrus.webp';
import watermelon_stick from '~/images/lmnt-stick_0000_watermelon.webp';
import orange_stick from '~/images/lmnt-stick_0003_orange.webp';
import raspberry_stick from '~/images/lmnt-stick_0002_raspberry.webp';
import chocolate_stick from '~/images/lmnt-stick_0008_chocolate.webp';
import mango_stick from '~/images/lmnt-stick_0005_mango_chili.webp';
import raw_stick from '~/images/lmnt-stick_0001_raw.webp';
import lemon_habanero_stick from '~/images/lmnt-stick_0006_lemon_hab.webp';

export default function FlavorsGrid() {
  return (
    <div className='hidden lg:grid grid-cols-8 gap-10 text-center text-gray-100 px-8'>
      <div>
        <img className='w-96 mx-auto' src={citrus_stick} alt='Citrus Salt' />
        <div className='mt-4'>
          <h5 className='font-bold'>Citrus Salt</h5>
          <p className='italic font-light'>30 count</p>
        </div>
      </div>
      <div>
        <img
          className='w-96 mx-auto'
          src={watermelon_stick}
          alt='Citrus Salt'
        />
        <div className='mt-4'>
          <h5 className='font-bold'>Watermelon Salt</h5>
          <p className='italic font-light'>30 count</p>
        </div>
      </div>
      <div>
        <img className='w-96 mx-auto' src={orange_stick} alt='Citrus Salt' />
        <div className='mt-4'>
          <h5 className='font-bold'>Orange Salt</h5>
          <p className='italic font-light'>30 count</p>
        </div>
      </div>
      <div>
        <img className='w-96 mx-auto' src={raspberry_stick} alt='Citrus Salt' />
        <div className='mt-4'>
          <h5 className='font-bold'>Raspberry Salt</h5>
          <p className='italic font-light'>30 count</p>
        </div>
      </div>
      <div>
        <img className='w-96 mx-auto' src={chocolate_stick} alt='Citrus Salt' />
        <div className='mt-4'>
          <h5 className='font-bold'>Chocolate Salt</h5>
          <p className='italic font-light'>30 count</p>
        </div>
      </div>
      <div>
        <img className='w-96 mx-auto' src={mango_stick} alt='Citrus Salt' />
        <div className='mt-4'>
          <h5 className='font-bold'>Mango Chilli</h5>
          <p className='italic font-light'>30 count</p>
        </div>
      </div>
      <div>
        <img className='w-96 mx-auto' src={raw_stick} alt='Citrus Salt' />
        <div className='mt-4'>
          <h5 className='font-bold'>Raw Unflavored</h5>
          <p className='italic font-light'>30 count</p>
        </div>
      </div>
      <div>
        <img
          className='w-96 mx-auto'
          src={lemon_habanero_stick}
          alt='Citrus Salt'
        />
        <div className='mt-4'>
          <h5 className='font-bold'>Lemon Habanero</h5>
          <p className='italic font-light'>30 count</p>
        </div>
      </div>
    </div>
  );
}
