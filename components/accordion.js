import { useState } from "react";



export default function AccordionApp() {
    const title="FAQ"
    
       
        const hiddenTexts = [{
            label: 'How often should i get my car tuneup ?',
            value: 'After every 15000 kms'
        },
        {
            label: 'How often should i get my catalytic convertor cleaned ?',
            value: 'After every 25000 km'
        },
        {
            label: 'At what mileage should i change my gear oil ?',
            value: 'After every 60000 km'
        },
        {
            label: 'How often do i need to service my brake pads ?',
            value: 'After every 10000 km'
        }];
        return (
            <div>
                <Header title={title} />
                <Accordion hiddenTexts={hiddenTexts} />
            </div>
        );
    }


function Header(props) {

        return (
            <h1 className="text-center font-Muli text-3xl">{props.title}</h1>
        );
        }

function Accordion(props) {
    
        return (
            <div className="accordion">
                {props.hiddenTexts.map((hiddenText) => <AccordionItem key={hiddenText.label} hiddenText={hiddenText} />)}
            </div>
        );
    }


function AccordionItem(props) {
        const [visibility,setVisibility]=useState(false)
     
    
    const handleToggleVisibility=()=>
    {
        setVisibility(!visibility);
    }
    
        const activeStatus = visibility ? 'active' : ''

        return (
            <div>
                <button className="accordion__button" onClick={handleToggleVisibility}>{props.hiddenText.label}<span>{visibility? '-': '+'}</span></button>
                <p className={`accordion__content ${activeStatus}`}>
                {
                    props.hiddenText.value
                }
                </p>
                
            </div>
        );
    }


