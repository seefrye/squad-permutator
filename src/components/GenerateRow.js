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
            <td>{tl2}</td>
            <td>{tl3}</td>
            <td>{tl4}</td>
            <td>{tl5}</td>
            <td>{tl6}</td>
        </tr>
    )
  }


export default GenerateRow