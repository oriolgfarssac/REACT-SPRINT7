import './App.css';
import { CheckBox, TextCheck, Button } from './elements/components';
import { useState, useEffect } from 'react';
import { DivCheck, Price, DivCheck2, Interior } from './style';


function App() {
  const [totalPrice, setPrice] = useState(0);
  const [webChecked, setWebChecked] = useState(Boolean);
  const [seoChecked, setSeoChecked] = useState(Boolean);
  const [adsChecked, setAdsChecked] = useState(Boolean);
  const [pag, setPag] = useState(
    Number(window.localStorage.getItem('Pag'))
  );
  const [idm, setIdm] = useState(
    Number(window.localStorage.getItem('Idm'))
  );

  useEffect(() => {
    check();
  }, []);

  useEffect(() => {
    saveData();
    calculateTotalPrice();
  }, [webChecked, seoChecked, adsChecked, pag, idm]);

  const check = () =>{
    const web: string = String(window.localStorage.getItem('Web'));
    const seo: any = String(window.localStorage.getItem('Seo'));
    const ads: any = String(window.localStorage.getItem('Ads'));
    if(web == 'true'){
      setWebChecked(true);
    }
    if(ads == 'true'){
      setAdsChecked(true);
    }
    if(seo == 'true'){
      setSeoChecked(true);
    }
  }

  const calculateTotalPrice = () => {
    let sumaPrice = 0;
    if (webChecked) sumaPrice += 500;
    sumaPrice += pag * idm * 30;
    if (!webChecked) sumaPrice -= pag * idm * 30;
    if (seoChecked) sumaPrice += 300;
    if (adsChecked) sumaPrice += 200;

    setPrice(sumaPrice);
  };

  const saveData = () => {
    window.localStorage.setItem("Web", String(webChecked));
    window.localStorage.setItem("Seo", String(seoChecked));
    window.localStorage.setItem("Ads", String(adsChecked));
    window.localStorage.setItem("Pag", String(pag));
    window.localStorage.setItem("Idm", String(idm));
  }

  const isCheckWeb = () => {
    setWebChecked((prevWebChecked) => !prevWebChecked);
  };

  const isCheckSeo = () => {
    setSeoChecked((prevSeoChecked) => !prevSeoChecked);
  };

  const isCheckAds = () => {
    setAdsChecked((prevAdsChecked) => !prevAdsChecked);
  };

  const incrementPages = () => {
    setPag((prevPag) => prevPag + 1);
  };

  const decrementPages = () => {
    if(pag >= 1) setPag((pag) => pag - 1);
  };

  const incrementLanguages = () => {
    setIdm((idm) => idm + 1);
  };

  const decrementLanguages = () => {
    if(idm >= 1) setIdm((idm) => idm - 1);
  };

  const handlePageChange = (change: any) => {
    const value = parseInt(change.target.value);
    setPag(isNaN(value) ? 0 : value);
  };
  
  const handleLanguageChange = (change: any) => {
    const value = parseInt(change.target.value);
    setIdm(isNaN(value) ? 0 : value);
  };

  return (
    <div id='main'>
      <div>
        <h3> Generador de Pressupost 💰</h3>

        {!webChecked && (
          <DivCheck>
            <CheckBox type='checkbox' checked={webChecked} change={isCheckWeb} />
            <TextCheck content='Una pàgina web (500€)' />
          </DivCheck>
        )}

        {webChecked && (
          
          <>
          <DivCheck>
          <CheckBox type='checkbox' checked={webChecked} change={isCheckWeb} />
          <TextCheck content='Una pàgina web (500€)' />
        </DivCheck>
          <DivCheck2>
            <Interior>
              <Button id='bto' onClick={decrementPages} content='-' />
              <TextCheck content='Número de pàgines' />
              &nbsp;&nbsp;&nbsp;
              <input type="number" className='idmContent' onChange={handlePageChange} id='pag' min={0} value={String(pag)}/>
              <Button id='bto2' onClick={incrementPages} content='+' />
            </Interior>

            <Interior>
              <Button id='bto' onClick={decrementLanguages} content='-' />
              <TextCheck content="Número d'idiomes" />
              &nbsp;&nbsp;&nbsp;
              <input type="number" className='idmContent' onChange={handleLanguageChange} id='idm' min={0} value={String(idm)}/>
              <Button id='bto2' onClick={incrementLanguages} content='+' />
            </Interior>
          </DivCheck2>
          </>)}

        <DivCheck>
          <CheckBox type='checkbox' checked={seoChecked} change={isCheckSeo} />
          <TextCheck content='Una consultoria SEO (300€)' />
        </DivCheck>

        <DivCheck>
          <CheckBox type='checkbox' checked={adsChecked} change={isCheckAds} />
          <TextCheck content='Una campanya de Google Ads (200€)' />
        </DivCheck>

        <Price> Preu Total: {totalPrice} €</Price>
      </div>
      </div>
  );
}


export default App;

