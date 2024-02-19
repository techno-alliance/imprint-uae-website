import React, { Component } from 'react'

export class DetailsThumb extends Component {
    render() {
        const {images, tab, myRef} = this.props;
        const myArray = [
            { id: 1, description: 'Imprint printing press is the foremost provider....' },
          
        ];
        return (
            <div className="flex flex-col justify-center md:flex-row md:justify-between lg:flex-row lg:justify-between cursor-pointer" ref={myRef}>
              {
                images.map((img, index) =>(
                   <div className='flex-col'>
                    <div className='w-auto h-auto md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[200px] overflow-hidden'>
                     <img className='w-[100%] h-[100%] object-cover object-center' src={img} alt="" key={index} 
                    onClick={() => tab(index)}
                    />
                   </div>
                   {myArray.map((item) => (
                <p key={item.id}>{item.description}</p>
            ))}
                   </div>
                ))
                }
            </div>
        )
    }
}

export default DetailsThumb