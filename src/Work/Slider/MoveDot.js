import './Slider.css'

export default function MoveDot({index, slideIndex, moveDot}) {
  return (
        <div 
        onClick={() => moveDot(index + 1)} 
        className={slideIndex === index + 1 ? "dot active" : "dot"} />
    )
}
