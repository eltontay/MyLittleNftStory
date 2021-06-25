import React from 'react';

/*
  need help with the middle part of the navbar, look at figma for details
  test commit
*/

function FilterBar() {
  return (
      <div className="flex overflow-y-auto 2xl:justify-center whitespace-nowrap ">
    <div className="m-auto items-center">
 <a
  href="/components"
  className="px-3 py-1.5 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800  rounded-lg capitalize"
  >All</a
 >
 <a
  title="CardanoKidz"
  href="/components/CardanoKidz"
  className="px-3 py-1.5 text-gray-500 dark:text-gray-400 capitalize hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
  >CardanoKidz</a
 >
 <a
  title="SpaceBudz"
  href="/components/SpaceBudz"
  className="px-3 py-1.5 text-gray-500 dark:text-gray-400 capitalize hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
  >SpaceBudz</a
 >
 <a
  title="CryptoKnitties"
  href="/components/CryptoKnitties"
  className="px-3 py-1.5 text-gray-500 dark:text-gray-400 capitalize hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
  >CryptoKnitties</a
 >
 <a
  title="Monsters"
  href="/components/FingerMonsters"
  className="px-3 py-1.5 text-gray-500 dark:text-gray-400 capitalize hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
  >FingerMonsters</a
 >
 <a
  title="Hoskinsons"
  href="/components/Hoskinsons"
  className="px-3 py-1.5 text-gray-500 dark:text-gray-400 capitalize hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
  >Hoskinsons</a
 >
 <a
  title="Popular"
  href="/components/inputs"
  className="px-3 py-1.5 text-gray-500 dark:text-gray-400 capitalize hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
  >Popular</a
 >
 <a
  title="New"
  href="/components/logins"
  className="px-3 py-1.5 text-gray-500 dark:text-gray-400 capitalize hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
  >New</a>

</div>

</div>
  );
}

export default FilterBar;
