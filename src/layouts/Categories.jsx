import React from 'react'

import "../styles/Categories.css"
export default function Categories() {

  return (
    <div>
      <div class="ui vertical menu">
        <a class="active item">Inbox</a>
        <a class="item">Spam</a>
        <a class="item">Updates</a>
        <div class="item"><div class="ui icon input"><input type="text" placeholder="Search mail..." />
        <i aria-hidden="true" class="search icon"></i></div></div></div>
    </div>
  )

}