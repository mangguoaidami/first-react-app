import React from 'React';

/**
 * 第一种方法编写子组建
 */
// class App extends React.Component {
//     render(){
//         return React.createElement('h1', null, 'Hello, i am a component.')
//     }
// }

/**
 * 第二种方法编写子组建
 */
class App extends React.Component {
    render(){
        let textValues = this.props.text;
        return <div className="appComponent">
            <h2>dadsa</h2>
            <p>{ textValues }</p>
        </div>
    }
}

/**
 * 第三种添加子组建
 */
// const App = () => {
//     return <h1>dadada</h1>;
// }

export default App