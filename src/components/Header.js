/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component, React } from "react";
import searchIcon from '../img/search-icon.png';
import cartIcon from '../img/cart-icon.png';
import avatarIcon from '../img/avatar.jpeg'

class Header extends Component {

    constructor() {
        super();

        this.state = {
            showForm: false
        }
    }

    showForm() {
        this.setState({
            showForm: !this.state.showForm
        })
    }

    render(){
        let linksMarkup = this.props.links.map((link, index) => {
            let linkMarkup = link.active ? (
                <a className="menu__link menu__link--active" href={link.link}>{link.label}</a>
            ) : (
                <a className="menu__link" href={link.link}>{link.label}</a>
            );
            return (
                <li key = {index}  className="menu__list-item">
                    {linkMarkup}
                </li>
            )
        })

        let searchForm = this.state.showForm ? (
            <form className="menu__search-form" method="POST">
                <input className="menu__search-input" placeholder="Search"/>
            </form>
        ) : '';
        return(
            <div className="container center">
                <nav className="menu">

                    <h1 className="menu__logo" style={{backgroundImage:'url(' + this.props.logo + ')'}}>Epic Co.</h1>

                    <div className="menu__right">
                        <ul className="menu__list">
                            {linksMarkup}
                        </ul>

                        <button 
                            className="menu__search-button" 
                            style={{backgroundImage:'url(' + searchIcon + ')'}}
                            onClick={this.showForm.bind(this)}
                        >
                        </button>
                        {searchForm}
                        

                    </div>
                    <button 
                        className="menu__cart-button" 
                        style={{backgroundImage:'url(' + cartIcon + ')'}}
                    >
                        <a href={"#"} className="menu__cart-number">0</a>
                    </button>

                    <button 
                        className="menu__avatar-button" 
                        style={{backgroundImage:'url(' + avatarIcon + ')'}}
                    >
                    </button>
                </nav>
            </div>
        )        
    }
}

export default Header;
