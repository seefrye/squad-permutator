import React from 'react'

function GenerateRow({row}) {
    let results = row.results

    const tl2 = results[0]
    const tl3 = results[1]
    const tl4 = results[2]
    const tl5 = results[3]
    const tl6 = results[4]
    
    return (
        <tr>
            <td className={tl2 === 0 ? 'null' : 'result'}>{tl2}</td>
            <td className={tl3 === 0 ? 'null' : 'result'}>{tl3}</td>
            <td className={tl4 === 0 ? 'null' : 'result'}>{tl4}</td>
            <td className={tl5 === 0 ? 'null' : 'result'}>{tl5}</td>
            <td className={tl6 === 0 ? 'null' : 'result'}>{tl6}</td>
        </tr>
    )
  }


export default GenerateRow