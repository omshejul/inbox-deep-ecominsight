import React from 'react'
interface SendProps {
  className?: string
}
const Send:React.FC <SendProps> = (props) => {
  return <svg className={props.className} width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.275 3.12a.569.569 0 00-.083.008l-.02.003a.591.591 0 00-.09.026L3.503 9.377a.592.592 0 00-.05 1.088l6.8 3.28 3.28 6.8a.593.593 0 001.089-.05l6.22-16.576a.59.59 0 00.026-.09l.003-.024a.597.597 0 000-.189l-.003-.024a.575.575 0 00-.029-.096c-.003-.009-.008-.017-.012-.026a.574.574 0 00-.035-.068l-.018-.027a.592.592 0 00-.15-.15.58.58 0 00-.097-.054l-.023-.011a.584.584 0 00-.098-.029c-.006-.001-.013-.001-.019-.003a.579.579 0 00-.112-.008z" fill="#000" stroke-width="0" stroke-miterlimit="10"/></svg>

}

export default Send