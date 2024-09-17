import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import '../styles/timeline.css'

const TimeLine = () => {

  const settings = {
    bgColor:'var(--color_principal)',
    color:'#fff',
    lineColor:'var(--color_timeline)'

  }
  const protocol = [
    {
      id:1,
      time:'19:00 PM',
      name:'Recepción y Ceremonia Civil',
      icon:'rings_white',
      color:'var(--color_timeline)',
      textColor:'rgb(218 167 88)'
    },

    {
      id:2,
      time:'20:00 PM',
      name:'protocolo',
      icon:'drinking_white',
      color:'var(--color_timeline)',
      textColor:'rgb(218 167 88)'
    },

    {
      id:3,
      time:'21:00 PM',
      name:'buen provecho',
      icon:'cutlery_white',
      color:'var(--color_timeline)',
      textColor:'rgb(218 167 88)'
    },

    {
      id:4,
      time:'22:00 PM',
      name:'hasta que el cuerpo aguante',
      icon:'music_white',
      color:'var(--color_timeline)',
      textColor:'rgb(218 167 88)'
    },
  ]
  return (
    <div className='timeline'>
      <h3 className='timeline-title-cont'>Protocolo</h3>
      <VerticalTimeline
      lineColor={`${settings.lineColor}`}
      >
        {
          protocol.map(item=>(
            <VerticalTimelineElement
              key=
                {item.id}
              className=
                "vertical-timeline-element--work"
              contentStyle={
                { background: `${settings.bgColor}`,
                  color:`${settings.color}`,
                  marginRight:'10px' }}
              contentArrowStyle={
                { borderRight: `7px solid ${settings.bgColor}`}}
              date=
                {`${item.time}`}
              dateClassName=
                'custom-date-color'
              iconStyle={
                { background: `${settings.bgColor}`, 
                fill: `${settings.bgColor}`,
                boxShadow:`0 0 0 4px ${settings.bgColor}`}} 
              icon={
                <img src={`/img/icons/${item.icon}.svg`} 
                alt={`ico-${item.icon}`} 
                className='custom-icon'/>}
            >
            <h3 className="vertical-timeline-element-title timeline-title">{item.name}</h3>
            </VerticalTimelineElement>
          ))
        }

      </VerticalTimeline>
    </div>
  )
}

export default TimeLine