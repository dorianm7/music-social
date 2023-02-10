/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import AfterReportModalContents from '../../../components/modal-contents/AfterReportModalContents/AfterReportModalContents';
import BasicButton from '../../../components/basic/BasicButton/BasicButton';
import BasicPlaylist from '../../../components/BasicPlaylist/BasicPlaylist';
import CollaborativePlaylistPageContents from '../../page-contents/CollaborativePlaylistPageContents/CollaborativePlaylistPageContents';
import Comparison from '../../../components/Comparison/Comparison';
import Footer from '../../../components/Footer/Footer';
import MainNav from '../../../components/MainNav/MainNav';
import MainPage from './MainPage';
import MusicLibrary from '../../../components/MusicLibrary/MusicLibrary';
import PlaylistHeader from '../../../components/PlaylistHeader/PlaylistHeader';
import ReportProfileForm from '../../../components/forms/ReportProfileForm/ReportProfileForm';
import Tabs from '../../../components/subcomponents/Tabs/Tabs';
import UserProfileHeader from '../../../components/UserProfileHeader/UserProfileHeader';

export default {
  title: 'Containers/Pages/MainPage',
  component: MainPage,
  decorators: [
    (Story) => <MemoryRouter><Story /></MemoryRouter>,
  ],
  subcomponents: {
    MainNav,
    Tabs,
    MusicLibrary,
    CollaborativePlaylistPageContents,
    UserProfileHeader,
    BasicPlaylist,
    AfterReportModalContents,
    BasicButton,
    PlaylistHeader,
    ReportProfileForm,
    Comparison,
    Footer,
  },
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <MainPage {...args} />;

export const Default = Template.bind({});
Default.args = MainPage.defaultProps;
