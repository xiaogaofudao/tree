import * as React from 'react';
import classNames from 'classnames';
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';
// import FileOutlined from '@ant-design/icons/FileOutlined';
// import MinusSquareOutlined from '@ant-design/icons/MinusSquareOutlined';
// import PlusSquareOutlined from '@ant-design/icons/PlusSquareOutlined';
import CaretDownFilled from '@ant-design/icons/CaretDownFilled';
import { AntTreeNodeProps } from '../AntTree';
import { isValidElement, cloneElement } from './reactNode';

export default function renderSwitcherIcon(
  prefixCls: string,
  switcherIcon: React.ReactNode | null | undefined,
  // showLine: boolean | undefined,
  { isLeaf, loading }: AntTreeNodeProps,
) {
  if (loading) {
    return <LoadingOutlined className={`${prefixCls}-switcher-loading-icon`} />;
  }
  if (isLeaf) {
    return null;
    // return showLine ? <FileOutlined className={`${prefixCls}-switcher-line-icon`} /> : null;
  }
  const switcherCls = `${prefixCls}-switcher-icon`;
  if (isValidElement(switcherIcon)) {
    return cloneElement(switcherIcon, {
      className: classNames(switcherIcon.props.className || '', switcherCls),
    });
  }

  if (switcherIcon) {
    return switcherIcon;
  }
  // if (showLine) {
  //   return expanded ? (
  //     <MinusSquareOutlined className={`${prefixCls}-switcher-line-icon`} />
  //   ) : (
  //     <PlusSquareOutlined className={`${prefixCls}-switcher-line-icon`} />
  //   );
  // }
  return <CaretDownFilled className={switcherCls} />;
}
