const positionBottom = (tooltipRect, toggleSourceRect) => {
  const widthDifference = (tooltipRect.width - toggleSourceRect.width) / 2;
  const left = toggleSourceRect.left - widthDifference;
  const top = toggleSourceRect.top + toggleSourceRect.height + SPACE_BETWEEN + window.pageYOffset;

  return {
    left,
    top,
  };
};

const positionRight = (tooltipRect, toggleSourceRect) => {
  const heightDifference = (tooltipRect.height - toggleSourceRect.height) / 2;
  const left = toggleSourceRect.left + toggleSourceRect.width + SPACE_BETWEEN;
  const top = toggleSourceRect.top - heightDifference + window.pageYOffset;

  return { left, top };
};

const positionLeft = (tooltipRect, toggleSourceRect) => {
  const heightDifference = (tooltipRect.height - toggleSourceRect.height) / 2;
  const left = toggleSourceRect.left - tooltipRect.width - SPACE_BETWEEN;
  const top = toggleSourceRect.top - heightDifference + window.pageYOffset;

  return { left, top };
};

const positionTop = (tooltipRect, toggleSourceRect) => {
  const widthDifference = (tooltipRect.width - toggleSourceRect.width) / 2;
  const left = toggleSourceRect.left - widthDifference;
  const top = toggleSourceRect.top - tooltipRect.height - SPACE_BETWEEN + window.pageYOffset;

  return {
    left,
    top,
  };
};

const SPACE_BETWEEN = 8;

export const positionTooltip = (tooltipNode, toggleSourceNode, position) => {
  const tooltipRect = tooltipNode.getBoundingClientRect();
  const toggleSourceRect = toggleSourceNode.getBoundingClientRect();

  if (position === 'bottom') {
    return positionBottom(tooltipRect, toggleSourceRect);
  }

  if (position === 'right') {
    return positionRight(tooltipRect, toggleSourceRect);
  }

  if (position === 'left') {
    return positionLeft(tooltipRect, toggleSourceRect);
  }

  return positionTop(tooltipRect, toggleSourceRect);
};
