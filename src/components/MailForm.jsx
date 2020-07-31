import React from "react";
import styled from 'styled-components';

//Begin Mailchimp Signup Form
/* MailChimp Form Embed Code //cdn-images.mailchimp.com/embedcode/slim-10_7.css */
const Mc_embed_signup = styled.div`
  background:#fff; 
  clear:left; 
  font-size:14px; 
  font-family: Helvetica,Arial,sans-serif;  
  width:300px;
`;
const Form = styled.form`
    display:block; 
    position:relative; 
    text-align:left; 
    padding:10px 0 10px 3%
`;
const Label = styled.label`
    display:block; 
    font-size:16px; 
    padding-bottom:10px; 
    font-weight:bold;
`;
const Email = styled.input`
    font-family:"Open Sans","Helvetica Neue",Arial,Helvetica,Verdana,sans-serif; 
    font-size: 15px; 
    display:block; 
    padding:0 0.4em; 
    margin:0 4% 10px 0; 
    min-height:32px; 
    width:58%; 
    min-width:130px; 
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px; 
    border-radius: 3px;
    border:1px solid #999; 
    -webkit-appearance:none;
    &:focus {border-color:#333;}
`;
const Button = styled.input`
    display: inline-block;
    width:35%; 
    height: 32px; 
    margin: 0 5px 10px 0; 
    padding:0; 
    min-width:90px;
    background-color: #aaa; 
    color: #FFFFFF;
    border: 0 none; 
    border-radius:4px; 
    letter-spacing:.03em; 
    cursor: pointer; 
    font-size:15px; 
    line-height: 32px; 
    text-align: center; 
    vertical-align: top; 
    white-space: nowrap; 
    transition: all 0.23s ease-in-out 0s;
    &:hover {background-color:#777;}
`;
//End mc_embed_signup

const MailForm = () =>{
    return (
        <Mc_embed_signup id="mc_embed_signup">
            <Form action="https://udistrital.us17.list-manage.com/subscribe/post?u=a8c6f39ab847eba3269ba7df5&amp;id=2d49305332" 
                method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" 
                className="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">
                    <Label for="mce-EMAIL">Contact</Label>
                    <Email type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" 
                        placeholder="email address" required/>
                    <div style="position: absolute; left: -5000px;" aria-hidden="true">
                        <input type="text" name="b_a8c6f39ab847eba3269ba7df5_2d49305332" tabIndex="-1" value=""/>
                    </div>
                    <div className="clear" style={{clear:none, display:inline,}}>
                        <Button type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/>
                    </div>
                </div>
            </Form>
        </Mc_embed_signup>                            
    )
}

export default MailForm;