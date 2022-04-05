import Flickity from 'react-flickity-component'

const flickityOptions = {
    initialIndex: 2
}

const Slider =  () => {
  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <img 
        src={require("../../assets/images/Banner1-Green.jpg")}
        alt="banner"
        style={{ width:"100%", }}
      />
    </Flickity>
  )
}

export default Slider;
