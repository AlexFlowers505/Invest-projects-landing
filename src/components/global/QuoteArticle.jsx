import React from 'react'
import { picsPath } from '../../data/data'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'

const QuoteArticle = ({quoteDataHolder}) => {
    const {picSrc, theQuote, author, jobPosition} = quoteDataHolder
    const authorFullSring = `${author}, ${jobPosition}`
  return (
    <article className="quote-article">
      <div className="quote-article__author-pic-masky-wrapper">
        <img src={picsPath+picSrc} alt={authorFullSring} className="quote-article__author-pic" />
      </div>
      <div className="the-quote__wrapper">
        <ImQuotesLeft className="the-quote__q-mark the-quote__q-mark--left"/>
        <p className="the-quote__quote">{theQuote}</p>
        <ImQuotesRight className="the-quote__q-mark the-quote__q-mark--right"/>
      </div>
      <div className="author-info__wrapper">
        <p className="author-info__name">{author},</p>
        <p className="author-info__position">{jobPosition}</p>
      </div>
    </article>
  )
}

export default QuoteArticle