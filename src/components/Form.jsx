import React from "react";

import styled from 'styled-components';

const Mc_embed_signup = styled.div`
  text-align: center;
  background:#fff; 
  clear:left; 
  font:14px Helvetica,Arial,sans-serif;  
  width:300px
`;

const Form = () =>{    

    return (
        <Mc_embed_signup>
            <form action="https://udistrital.us17.list-manage.com/subscribe/post?u=a8c6f39ab847eba3269ba7df5&amp;id=2d49305332" method="post" id="mc-embedded-subscribe-form" 
                name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">
                    <h2>Subscribe</h2>
                    <div class="mc-field-group">
                        <label for="mce-EMAIL">Email Address </label>
                        <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL"/>
                    </div>
                    <div id="mce-responses" class="clear">
                        <div class="response" id="mce-error-response" style="display:none"></div>
                        <div class="response" id="mce-success-response" style="display:none"></div>
                    </div>    
                    <div style="position: absolute; left: -5000px;" aria-hidden="true">
                        <input type="text" name="b_a8c6f39ab847eba3269ba7df5_2d49305332" tabindex="-1" value=""/>
                    </div>
                    <div class="clear">
                        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"/>
                    </div>
                </div>
            </form>
        </Mc_embed_signup>                              
    )
}

export default Form;