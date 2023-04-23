import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants';
const SideBar = ({selectedCategory, setSelectedCategory}) => {
    


  return (
    <Stack
    direction='row'
    sx= {{overflowY:"auto",
          height: {sx:'auto',sm:'95%'},
          flexDirection:{sm:'column'},
        }}
    >
        {categories.map((category)=> (
            <button 
            className='category-btn'
            onClick={() => {
              setSelectedCategory(category.name)
              console.log(selectedCategory) }
        }        
             style={{background: category.name ===
                     selectedCategory  && '#FC1503',
                      color:'white'}}
            >
                <span style={{color: category.name ===
                selectedCategory ? 'white' : 'red',
                marginRight:'15px'}}
                >
                    {category.icon}
                </span>
                <span style={{opacity : category.name===
                              selectedCategory ? '1' : '0.7'}}>
                    {category.name}
                </span>
            </button>
        ))}
      
    </Stack>
  )
                }

export { SideBar }
