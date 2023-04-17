import React from 'react'

function Family({ family }) {
    const Office_address = (
        <>
            {family["off_add_l1"]+","}
                {family["off_add_l2"]}<br/>
                {family["off_add_city"]+","}
                {family["off_add_state"]}<br/>
                {family["off_add_country"]+"-"}
                {family["off_add_pin_code"]}
        </>
    )
       
    
    return (
        <div id="family" class="tab-pane fade">
            <div class="table-responsive">
                <table class="table">
                    <tbody>
                        <tr>
                            <td><i class="fas fa-business-time"></i> Father Occupation</td>
                            <td id="vfather_occupation">{family["father_occupation"]}</td>
                        </tr>
                        <tr>
                            <td><i class="fa fa-home"></i> Office Address</td>
                            <td>
                                <address id="vaddress" >{Office_address}</address>
                            </td>
                        </tr>
                        <tr>
                            <td><i class="fas fa-business-time"></i> Mother Occupation</td>
                            <td id="vmother_occupation">{family["mother_occupation"]}</td>
                        </tr>
                        <tr>
                            <td><i class="fas fa-rupee-sign"></i> Family Income</td>
                            <td id="vfamily_income">{family["family_income"]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Family
