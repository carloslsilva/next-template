import clsx from 'clsx'
import React from 'react'

export const Container = ({
  as: Element = 'div',
  children,
  className,
  ...props
}) => (
  <Element className={clsx('container mx-auto', className)} {...props}>
    {children}
  </Element>
)
