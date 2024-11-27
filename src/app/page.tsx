export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-xl">Yhteensopimattomat</h1>
        <p className="w-1/2">
          Kaikkea tai kaikkia ei ole tarkoitettu olemaan yhdessä, tuntumaan
          samalta tai toimimaan samoin. Samalla ristiriita on luonnonvoima, joka
          paljastaa ennalta-aavistamattomia ajattelun uria ja luo
          pysäyttämätöntä liikettä. Kenties lopulta tuo voima vaikuttaa myös sen
          vapauttaneisiin ja syntyy uutta. Yhteensopivampaa.
        </p>
      </main>
    </div>
  );
}
