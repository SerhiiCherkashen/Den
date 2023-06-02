import logo from './logo.svg';
import './App.css';
import File from './file/File';
import { useTranslation, Trans } from 'react-i18next';
// import './File.css'

// const lngs = {
//   en: { nativeName: 'English' },
//   de: { nativeName: 'Deutsch' },
//   ua: { nativeName: 'Ukraine' },
// };

const languages = {
  ua: { nativeName: 'Ukraine' },
  en: { nativeName: 'English' },
  rus: { nativeName: 'Russian' },
}

function App() {

  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      {/* <File /> */}
      <div>
        <div>
          <div className="wrapper" >
            <span className="button" >
              {Object.keys(languages).map((lng) => (
                <button key={lng}
                  style={{
                    fontWeight: i18n.resolvedLanguage === lng ?
                      'bold' : 'normal'
                  }}
                  type="submit"
                  onClick={() => i18n.changeLanguage(lng)}>
                  {languages[lng].nativeName}
                </button>
              ))}
            </span>
            <div className="wrapperTextsInputs" >
              <div className="textsInputs" >
                <p>
                  <Trans i18nKey="description.part1">
                    Name
                  </Trans>
                </p>
                <input />
                <p>
                  {t('description.part2')}
                </p>
                <input />
                <p>
                  {t('description.part3')}
                </p>

                <input />
                <div className="DatePol" >
                  <span>
                    {t('description.part4')}
                  </span>
                  <span>
                    {t('description.part5')}
                  </span>
                </div>
                <div className="dateInput" >
                  <input />
                  <input />
                </div>
                <input className="width" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


















{/* {Object.keys(lngs).map((lng) => (
          <button key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ?
                'bold' : 'normal'
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}>
            {lngs[lng].nativeName}
          </button>
        ))} */}
{/* <p>
        <Trans i18nKey="description.part1">
          Car Edit  "HYI" car and save to reload.
          car
        </Trans>
      </p> */}
{/* <p>
        <Trans i18nKey="description.part1">
          Car Edit  "HYI" car and save to reload.
          car
        </Trans>
      </p> */}
{/* <p>
        MOLOKO
        {t('description.part1')}
      </p> */}
{/* <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('description.part2')}
      </a> */}
{/* <a>
        TRASFORMER
        {t('description.part3')}
      </a> */}