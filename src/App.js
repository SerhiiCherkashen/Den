import logo from './logo.svg';
import './App.css';
import File from './file/File';
import { useTranslation, Trans } from 'react-i18next';


const lngs = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' },
  ua: { nativeName: 'Ukraine' },
};

function App() {

  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <File />
      <div>
        {Object.keys(lngs).map((lng) => (
          <button key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ?
                'bold' : 'normal'
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}>
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
      <p>
        <Trans i18nKey="description.part1">
          {/* <code>src/App.js</code>  */}
          Car Edit  "HYI" car and save to reload.
          car
        </Trans>
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('description.part2')}
      </a>
    </div>
  );
}

export default App;
