// DO NOT DELETE

import * as React from 'react'
import './App.css'
import { Header } from './Header'
import { Description } from './Description'
import { DogListContainer } from './DogListContainer'

//  * @type {React.FC}
//  */
export const App = () => {
  return (
    <div className="container">
      <Header name="Dog アプリ" />
      <main>
        <section className="dogView">
          <Description
            btn_text="更新"
            des_text="犬の画像を表示するアプリです。"
          />
        </section>
        <section className="dogList">
          <DogListContainer />
        </section>
      </main>
    </div>
  )
}
