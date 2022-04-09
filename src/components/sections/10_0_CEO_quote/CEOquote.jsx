import React from 'react'
import QuoteArticle from '../../global/QuoteArticle'
import { quotesInfo } from '../../../data/data'

const CEOquote = () => {
    const cEOquote = quotesInfo.find( quote => quote.id === 'directorQuote')
  return (
    <QuoteArticle quoteDataHolder={cEOquote}/>
  )
}

export default CEOquote