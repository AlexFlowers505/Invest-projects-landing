import React, {useState, useEffect} from 'react'

// hooks
import useScrollYcontrol from './hooks/useScrollYcontrol'

// icons
import { BiMenuAltRight } from 'react-icons/bi'
import { GrClose } from 'react-icons/gr'
import { BsChevronCompactRight } from 'react-icons/bs'

// oth
import { svgSpritePath } from '../../../data/data'
import { navContent } from '../../../data/data'
import OuterItem from './insides/OuterItem'

const SiteNav = () => {
    const [ isNavUnfolded, setisNavUnfolded ] = useState(false)
    const [isSeen, setIsSeen] = useState(true)
    const scroll = useScrollYcontrol()

    // navbar visibility checking
    useEffect(() => {
      scroll.y > 150 && scroll.y - scroll.lastY > 0 ? 
      setIsSeen(true) : setIsSeen(false)
    }, [scroll.y, scroll.lastY])
    
    // body scroll preventing on navbar unfolding
    useEffect(() => {
        const bodyStyle = document.body.style
        const resumeBodyScroll = () => {
            const scrollY = document.documentElement.style.getPropertyValue('--scroll-y')
            bodyStyle.position = 'fixed'
            bodyStyle.top = `-${scrollY}`
          }
          const blockBodyScroll = () => {
            const scrollY = bodyStyle.top
            bodyStyle.position = ''
            bodyStyle.top = ''
            window.scrollTo(0, parseInt(scrollY || '0') * -1)
          }
        !isNavUnfolded ? blockBodyScroll() : resumeBodyScroll()
    }, [isNavUnfolded])

      window.addEventListener('scroll', () => {
        document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`)
      });

  return (
    <nav className={`landing-nav${ isNavUnfolded ? " landing-nav--unfolded puff-in-center-2" : "" }${ isSeen ? " landing-nav--hidden" : ""}`}>
        { !isNavUnfolded && (
            <>
                <a className="landing-nav__btn landing-nav__btn--home" href="#"><svg><use xlinkHref={`${svgSpritePath}#logo-invPro--logo`}/></svg></a>  
                <button className="landing-nav__btn landing-nav__btn--burger" 
                        type="button"
                        onClick={()=>{setisNavUnfolded(true)}}
                >
                    <BiMenuAltRight/>
                </button>
            </>
        )}
        { isNavUnfolded && (
            <>
                <button className="landing-nav__btn landing-nav__btn--close"
                        onClick={()=>{setisNavUnfolded(false)}}
                ><GrClose/></button>
                <div className="landing-nav__nav-list">
                {navContent.map((item, i) => {
                    const { outerItemName, link, innerLinks } = item
                    return (
                        <OuterItem key={i}
                                   outerItemName={outerItemName}
                                   innerLinks={innerLinks}      
                        />
                    )
                })}
                </div>
            </>
        )}
    </nav>
  )
}

export default SiteNav