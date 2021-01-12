import Link from 'next/link';
import Markdown from 'markdown-to-jsx'

export const WhyGenesis = ({data}) => {
  return (
    <div className="why-genesis">
      <div className="title-container">
        <h1 className="why">why</h1>
        <h1 className="genesis">genesis</h1>
      </div>
      <h2 className="subtitle">Creation & Beginnings</h2>
      <div className="blob-container">
        <img className="blob" src="/images/blob1.png"/>
        <div className="definition-container">
          <p className="genesis-word">genesis:</p>
          <p className="type">gen•e•sis | noun</p>
          <p className="def">The origin or coming into being of something; the first book of Jewish and Christian scriptures.</p>
          <p className="syn-ant">Synonyms: beginning, birth, commencement, dawn, inception, morning <br />
            Antonyms: close, conclusion, ending, omega</p>
        </div>
      </div>
      <div className="creation-and-beginnings-body">
        <h3 className="creation-title">creation</h3>
        <Markdown className="creation-body">{data.CreationText}</Markdown>
        <h3 className="beginnings-title">beginnings</h3>
        <Markdown className="beginnings-body">{data.BeginningsText}</Markdown>
      </div>
      <img className="blue-logo" src="/images/genesis-blue-circle.png"/>
    </div>
  )
}