import ReactSlider from 'react-slider';
import styled from 'styled-components';

export const SliderElement = styled(ReactSlider)`
  width: 100%;
  height: 1rem;
`;
export const ThumbElement = styled.div`
  height: 2.2rem;
  width: 2.2rem;
  text-align: center;
  background-color: #fff;
  color: #000;
  border-radius: 50%;
  cursor: grab;
  outline: none;
  margin-top: -0.6rem;
  font-size: 0;
`;
export const TrackElement = styled.div`
  background: ${({ index }) => {
    if (index === 2) {
      return '#D93636';
    }
    return index === 1 ? '#575757' : '#D93636';
  }};
  top: 0;
  bottom: 0;
  border-radius: 1rem;
`;
export const SliderMetaElement = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  font-size: 1.4rem;
  line-height: 1.6rem;
  height: 4rem;
`;
