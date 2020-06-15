////////////////////////////////////////////////////////////////////////////////
////////////////////////////// CONSTANTS ///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
var TODAY = new Date();
var DD = String(TODAY.getDate()).padStart(2, '0');
var MM = String(TODAY.getMonth() + 1).padStart(2, '0');
var YYYY = String(TODAY.getFullYear());
var DATE = YYYY + MM + DD;
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
////////////////////////////// DEFINE TIMELINE /////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
          /* create timeline */
          var timeline = [];
//           var calib_timeline = {
//             timeline: []
//           };
//           // var TT_instructions_timeline = {
//           //   timeline: []
//           // };
//           var TT_timeline = {
//             timeline: []
//           };
//           // var SRT_instructions_timeline = {
//           //   timeline: []
//           // };
//           var SRT_timeline = {
//             timeline: []
//           };
//           var SiNRT_timeline = {
//             timeline: []
//           };
//           var NVSRT_timeline = {
//             timeline: []
//           };
//           var FWDS_timeline = {
//             timeline: []
//           };
//           var BWDS_timeline = {
//             timeline: []
//           };
//           // var wordRec_instructions_timeline = {
//           //   timeline: []
//           // };
//           var wordRec_timeline = {
//             timeline: []
//           };
//           var wordRecSiN_timeline = {
//             timeline: []
//           };
//           var wordRecNVS_timeline = {
//             timeline: []
//           };
//               // task1.timeline.push(first_trial)
// ////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
////////////////////////////// CALIBRATION /////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
    /* page 1. welcome */
    var welcome = {
      data: {
        screen_ID: "Welcome"
      },
      type: "survey-html-form",
      preamble: "<p>Welcome to the experiment DEMO!</p>" +
        "Please complete the form",
      html: "<p>Participant ID: <input name='Part_ID' type='text' /></p>",
      // html:  <input name='Part_ID type='text' />
      on_finish: function(data){
        data.responses = JSON.parse(data.responses);
        // console.log("data.responses:" + data.responses)
        jsPsych.data.addProperties({
          part_ID: data.responses.Part_ID,
        });
        // jsPsych.data.displayData();
        // console.log("part_ID:" + part_ID);
        // console.log("data.responses:" + data.responses);
      }
    };

//     /* pages 2-4. Instructions */
//     var instructions_general = {
//       data: {
//         screen_ID: "Instructions"
//       },
//       type: "instructions",
//       pages: [
//         // page 2:
//         "<p>This experiment is about speech recognition.</p>" +
//         "<p>To begin with, make sure that you are in a silent environment.</p>" +
//         "<div style='float: left;'><img src='../../stimuli/calibration/nN3.jpg' width='100' height='100' /img></div>" +
//         "<div style='float: right;'><img src='../../stimuli/calibration/nN1.jpg' width='100' height='100' /img></div>" +
//         "<div><img src='../../stimuli/calibration/nN2.jpg' width='100' height='100' /img></div>",
//         // "<div style="width: 500px;"> +
//         //   <div style="float: left; width: 200px;"><img src='jspsych-6.1.0/examples/img/SRT/nN3.jpg'/img></div> +
//         //   <div style="float: left; width: 100px;"><img src='jspsych-6.1.0/examples/img/SRT/nN1.jpg'/img></div> +
//         //   <div style="float: left; width: 200px;"><img src='jspsych-6.1.0/examples/img/SRT/nN2.jpg'/img></div> +
//         //   <br style="clear: left;" />
//         // </div>",
//         // "<div><img src='jspsych-6.1.0/examples/img/SRT/nN3.jpg' align="left" /> +
//         // <img src='jspsych-6.1.0/examples/img/SRT/nN1.jpg' align="left" /> +
//         // <img src='jspsych-6.1.0/examples/img/SRT/nN2.jpg' /></div>",
//         // page 3:
//         "<p>Please, wear headphones and make yourself comfortable.</p>" +
//         "<div style='float: left;'><img src='../../stimuli/calibration/he.jpg' width='100' height='100' /img></div>" +
//         "<div style='float: right;'><img src='../../stimuli/calibration/re.jpg' width='100' height='100' /img></div>",
//         // page 4:
//         "<p>Before starting the experiment, we ask you to regulate the volume " +
//         "of your loudspeakers while listening to a sound (in the next page) " +
//         "to a level that allows you to easily hear the sound, but which is, " +
//         "at the same time, comfortable.</p>"
//       ],
//       show_clickable_nav: true
//     }
//
//     var calib_preAudio = {
//       type: 'html-button-response',
//       stimulus: "<p>PART 1: CALIBRATION</p>" +
//       "<p>Insert instructions here.</p>",
//       choices: ["play"]
//     };
//
//     var calib_audioOut = {
//       type: 'audio-keyboard-response',
//       stimulus: '../../stimuli/calibration/partyCrowd11sec_eq.wav',
//       choices: jsPsych.NO_KEYS,
//       trial_duration: 10000,
//       prompt: "Regulate volume.",
//     response_ends_trial: false
//     }
//
//     var calib_postAudio = {
//       type: 'html-button-response',
//       stimulus: "<p>If you have set the volume, proceed to the experiment, " +
//       "else replay the sound</p>",
//       choices: ["replay", "proceed"]
//     };
//
//     var calib_node = {
//       timeline: [calib_audioOut, calib_postAudio],
//       loop_function: function(data){
//         if(jsPsych.data.get().last(1).values()[0].button_pressed == 0){
//             return true;
//         } else {
//             return false;
//         }
//       }
//     }
//
// /////// PUSH CALIBRATION TRIALS TO CALIBRATION TIMELINE /////////
//     calib_timeline.timeline.push(welcome);
//     calib_timeline.timeline.push(instructions_general);
//     calib_timeline.timeline.push(calib_preAudio);
//     calib_timeline.timeline.push(calib_node);
//     // timeline.push(calib_timeline);
// ////////////////////////////////////////////////////////////////////////////////
//
//
//
// ////////////////////////////////////////////////////////////////////////////////
// /////////////////////////// TONGUE TWISTERS ////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////
//     var tonguetwistersList_A_timeline_variables = [
//         {tongueTwist: 'Teich Deich Teich Deich', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'ABAB', tongueTwist: 'Teich Deich Teich Deich'}},
//         {tongueTwist: 'Beil Peil Beil Peil', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'ABAB', tongueTwist: 'Beil Peil Beil Peil'}} //,
//         // {tongueTwist: 'Kern Gern Kern Gern', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'ABAB', tongueTwist: 'Kern Gern Kern Gern'}}
//     ];
//
// ///////////////////
//     var TT_pre_trial = {
//       type: 'html-button-response',
//       stimulus: jsPsych.timelineVariable('tongueTwist'),
//       choices: ['Start practice trial']
//     };
//
//     var TT_practice = {
//         type: "audio-audio-down",
//         audio_out: '../../stimuli/TT/met1HzSoft_2min.wav',
//         choices: ['Stop practice trial and start recording'],
//         prompt:  jsPsych.timelineVariable('tongueTwist')
//     };
//
//     var TT_trial = {
//         type: "audio-audio-down",
//         audio_out: '../../stimuli/TT/met2_5HzSoft_2min.wav',
//         choices: ['Stop trial and go to next item'],
//         prompt:  jsPsych.timelineVariable('tongueTwist')
//     };
// ///////////////////
//
//         var TTtest_procedure_blockA = {
//           timeline: [TT_pre_trial, TT_practice, TT_trial],
//           timeline_variables: tonguetwistersList_A_timeline_variables,
//           randomize_order: true
//           // repetitions: 1
//         };
//
//     /* pages 2-4. Instructions */
//     var TTinstructions = {
//       type: 'html-button-response',
//       data: {
//         screen_ID: "TTinstructions"
//       },
//       stimulus: "<p>PART 2: TONGUE TWISTERS</p>" +
//       "<p>Insert instructions here.</p>",
//       choices: ['Continue'],
//       show_clickable_nav: true
//     }
//
//     TT_timeline.timeline = [TTinstructions, TTtest_procedure_blockA];
//
// /////// PUSH CALIBRATION TRIALS TO CALIBRATION TIMELINE /////////
//     // timeline.push(TT_timeline);
// ////////////////////////////////////////////////////////////////////////////////
//
//
//
// ////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////// SiNRT ////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////
//     var instructions_SRT = {
//       data: {screen_id: "instructions_SRT"},
//       type: 'html-button-response',
//       stimulus: "<p>PART 3: SRT. Insert instructions here.</p>",
//       choices: ['Continue'],
//       show_clickable_nav: true,
//       on_finish: function() {
//         console.log("INSTRUCTIONS SRT")
//       }
//     };
//     // SRT_instructions_timeline.timeline = instructions_SRT;
//     //   timeline.push(SRT_instructions_timeline);
//
// // var instructions_SiNRT = {
// //   data: {screen_id: "instructions_SiNRT"},
// //   type: 'html-button-response',
// //   stimulus: "<p>As part of this test, you will hear numbers from 0 to 9 in German" +
// //   " that are difficult to unserdtand because they are embedded in noise.</p>" +
// //   "<p>Your task is to select the button corresponding to the correct number.</p>" +
// //   "<p>Noise levels are increased throughout the test, meaning that it will become" +
// //   " harder over time and you will not get feedback for your responses.</p>" +
// //   "<p>Press 'Continue' to proceed to a practice trial</p>" +
// //   "<p> </p>" +
// //   "<p> </p>" +
// //   "<p>NOTE : the script is initialised with the `use_webaudio` parameter" +
// //   "of jspsych.init set to `false` for testing on local machine; "  +
// //   "remember to change for testing on server</p>",
// //   choices: ['Continue'],
// //   on_finish: function(data){
// //           }
// // };
//
// var block_count = 0;
// // var keep_going = 1;
// var next_block = 0;
//
// var fixation_cross = {
//   data: {screen_id: "fixation"},
//   type: 'html-keyboard-response',
//   stimulus: "<div style='font-size: 60px'><b>+</b></div>",
//   choices: jsPsych.NO_KEYS,
//   trial_duration: 1000
// }
//
// var stimDir_SiN = "../../stimuli/SRT/SiN/";
//
// var practice_trial_SiN = {
//   type: 'audio-button-response-simple',
//   data: {screen_id: "practice_trial", dB_SNR:0, speaker:25, digit_id: "6"},
//   stimulus:stimDir_SiN + "AAA_practiceTrial_Speaker25_Digit6_0dB_SNR.wav",
//   choices: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
//   prompt: "<p>What number was said?</p>",
//   on_finish: function(data){
//     if (data.button_pressed == data.digit_id){
//       data.accuracy = 1
//     } else {
//       data.accuracy = 0
//     }
//   }
// };
//
// var start_SiNRT = {
//   data: {screen_id: "start_SiNRT"},
//   type: 'html-button-response',
//   stimulus: "<p>Click 'Start Test' to get started</p>",
//   choices: ['Start Test']
// };
//
// var stimuli_0dB = [
//   {stimulus: stimDir_SiN + "Speaker01_Digit5_0dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:0, speaker:1, digit_id: "8"}},
//   {stimulus: stimDir_SiN + "Speaker05_Digit8_0dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:0, speaker:5, digit_id: "5"}},
//   {stimulus: stimDir_SiN + "Speaker06_Digit6_0dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:0, speaker:6, digit_id: "6"}},
//   {stimulus: stimDir_SiN + "Speaker07_Digit3_0dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:0, speaker:7, digit_id: "3"}},
//   {stimulus: stimDir_SiN + "Speaker08_Digit2_0dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:0, speaker:8, digit_id: "2"}}
// ];
//
// var SiNRT_trials = {
//  type: 'audio-button-response-simple',
//  data: jsPsych.timelineVariable("data"),
//  stimulus: jsPsych.timelineVariable("stimulus"),
//  choices: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
//  prompt: "<p>What number was said?</p>",
//  on_finish: function(data){
//    if (data.button_pressed == data.digit_id){
//      data.accuracy = 1,
//      block_count += 1
//    } else {
//      data.accuracy = 0
//    }
//  }
// };
//
// var after_block = {
//  data: {screen_id: "fixation"},
//  type: 'html-keyboard-response',
//  stimulus: "<div style='font-size: 60px'><b>+</b></div>",
//  choices: jsPsych.NO_KEYS,
//  trial_duration: 100,
//  on_finish: function(){
//    console.log("MOVING TO NEXT BLOCK..."),
//    console.log("COUNTER BEFORE RESET = " + block_count)
//    if (block_count != 0){
//        next_block = 1;
//        block_count = 0;
//      } else {
//        next_block = 0;
//      }
//    console.log("COUNTER AFTER BLOCK RESET = " + block_count)
//    }
// }
//
// var procedure_practiceSiNRT = {
//  timeline: [fixation_cross, practice_trial_SiN, start_SiNRT]
// };
//
// var procedure_0dB = {
//  timeline: [fixation_cross, SiNRT_trials],
//  timeline_variables: stimuli_0dB,
//  on_finish: function(){
//    console.log("block 1/16 count = " + block_count)
//  }
// };
//
// // SiNRT_timeline.timeline.push(instructions_SiNRT);
// SiNRT_timeline.timeline.push(procedure_practiceSiNRT);
// SiNRT_timeline.timeline.push(procedure_0dB);
// SiNRT_timeline.timeline.push(after_block);
//
// var instructions_NVSRT = {
//   data: {screen_id: "instructions_NVSRT"},
//   type: 'html-button-response',
//   stimulus: "<p>As part of this test, you will hear once more numbers from 0 to 9 in German" +
//   " that are again difficult to understand.</p>" +
//   "<p>Your task is to select the button corresponding to the correct number.</p>" +
//   "<p>Again, the test will become" +
//   " harder over time and you will not get feedback for your responses.</p>" +
//   "<p>Press 'Continue' to proceed to a practice trial</p>" +
//   "<p> </p>" +
//   "<p> </p>" +
//   "<p>NOTE : the script is initialised with the `use_webaudio` parameter" +
//   "of jspsych.init set to `false` for testing on local machine; "  +
//   "remember to change for testing on server</p>",
//   choices: ['Continue'],
//   on_finish: function(data){
//           }
// };
//
// var fixation_cross = {
//   data: {screen_id: "fixation"},
//   type: 'html-keyboard-response',
//   stimulus: "<div style='font-size: 60px'><b>+</b></div>",
//   choices: jsPsych.NO_KEYS,
//   trial_duration: 1000
// }
//
// var stimDir_NVS = "../../stimuli/SRT/NVS/32envSmooth/"; //5channels/32envSmooth/";
//
//     var practice_trial_NVS = {
//       type: 'audio-button-response-simple',
//       data: {screen_id: "practice_trial", envDep_pt:120, speaker:25, digit_id: "8"},
//       stimulus:stimDir_NVS + "AAA_practiceTrial_Speaker25_Digit8_120envDep_pt.wav",
//       choices: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
//       prompt: "<p>What number was said?</p>",
//       on_finish: function(data){
//         if (data.button_pressed == data.digit_id){
//           data.accuracy = 1
//         } else {
//           data.accuracy = 0
//         }
//       }
//     };
//
//     var start_NVSRT = {
//       data: {screen_id: "start_NVSRT"},
//       type: 'html-button-response',
//       stimulus: "<p>Click 'Start Test' to get started</p>",
//       choices: ['Start Test'],
//       on_finish: function(data){
//               }
//     };
//
// var stimuli_120pt = [
//   {stimulus: stimDir_NVS + "Speaker16_Digit4_120envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:120, speaker:16, digit_id: "4"}},
//   {stimulus: stimDir_NVS + "Speaker21_Digit9_120envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:120, speaker:21, digit_id: "9"}},
//   {stimulus: stimDir_NVS + "Speaker25_Digit3_120envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:120, speaker:25, digit_id: "3"}},
//   {stimulus: stimDir_NVS + "Speaker33_Digit0_120envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:120, speaker:33, digit_id: "0"}},
//   {stimulus: stimDir_NVS + "Speaker48_Digit5_120envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:120, speaker:48, digit_id: "5"}}
// ];
//
// var block_count = 0;
// // var keep_going = 1;
// var next_block = 0;
//
// var NVSRT_trials = {
//  type: 'audio-button-response-simple',
//  data: jsPsych.timelineVariable("data"),
//  stimulus: jsPsych.timelineVariable("stimulus"),
//  choices: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
//  prompt: "<p>What number was said?</p>",
//  on_finish: function(data){
//    if (data.button_pressed == data.digit_id){
//      data.accuracy = 1,
//      block_count += 1
//    } else {
//      data.accuracy = 0
//    }
//  }
// };
//
// // var after_block = {
// //  data: {screen_id: "fixation"},
// //  type: 'html-keyboard-response',
// //  stimulus: "<div style='font-size: 60px'><b>+</b></div>",
// //  choices: jsPsych.NO_KEYS,
// //  trial_duration: 100,
// //  on_finish: function(){
// //    console.log("MOVING TO NEXT BLOCK..."),
// //    console.log("COUNTER BEFORE RESET = " + block_count)
// //    if (block_count != 0){
// //        next_block = 1;
// //        block_count = 0;
// //      } else {
// //        next_block = 0;
// //      }
// //    console.log("COUNTER AFTER BLOCK RESET = " + block_count)
// //    }
// // }
//
// var procedure_practiceNVSRT = {
//  timeline: [fixation_cross, practice_trial_NVS, start_NVSRT]
// };
//
// var procedure_120pt = {
//  timeline: [fixation_cross, NVSRT_trials],
//  timeline_variables: stimuli_120pt,
//  on_finish: function(){
//    console.log("block 1/16 count = " + block_count)
//  }
// };
//
// // NVSRT_timeline.timeline.push(instructions_NVSRT);
// NVSRT_timeline.timeline.push(procedure_practiceNVSRT);
// NVSRT_timeline.timeline.push(procedure_120pt);
// NVSRT_timeline.timeline.push(after_block);
//
//
// //////////////////////// randomise order of SRTs ///////////////////////////////
//     var randomizedSRTblocks = jsPsych.randomization.shuffle([SiNRT_timeline, NVSRT_timeline]);
//
//       SRT_timeline.timeline = randomizedSRTblocks;
//       // SRT_timeline.timeline = [instructions_SRT, randomizedSRTblocks];
//       // timeline.push(SRT_timeline);
// ////////////////////////////////////////////////////////////////////////////////
//
//
//
// ////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////// FWDS ///////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////
//     var instructions_DS = {
//       data: {screen_id: "instructions_DS"},
//       type: 'html-button-response',
//       stimulus: '<p>PART 4: DIGIT SPAN</p>' +
//       '<p>Insert instructions here.',
//       choices: ['Continue']
//     }
//
//     var next_list = 0;
//     var do_2nd_pres = 0;
//
//     var stimDir_FWDS = "../../stimuli/digitSpan/FWDS/";
//
//     var instructions_FWDS = {
//       data: {screen_id: "instructions_FWDS"},
//       type: 'html-button-response',
//       stimulus: 'Please report the numbers you have heard in the same order as they were presented',
//       choices: ['Continue']
//     }
//
//     var trial1_FWDS_audio = {
//       on_start: function() {
//           console.log("TRIAL 1: do_2nd_pres? " + do_2nd_pres)
//           console.log("TRIAL 1: next list? " + next_list)
//       },
//       type: 'audio-keyboard-response-simple',
//       data: {screen_id: "audio_out", nr_items:4, speaker:35, correct_response: "6439", odd_even: "odd"},
//       stimulus: stimDir_FWDS + "originalFWDS_list1.wav",
//       prompt: "<div style='font-size: 60px'><b>+</b></div>",
//       trial_ends_after_audio: true
//     };
//
//     var trial1_FWDS_resp = {
//       on_start: function(data) {
//         data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
//           // data.list_count = 0;
//           // data.next_list = 0;
//           // console.log("TRIAL 1: do_2nd_pres? " + do_2nd_pres)
//           // console.log("TRIAL 1: next list? " + next_list)
//       },
//       data: {screen_id: "audio_out", nr_items:4, speaker:35, correct_response: "6439", odd_even: "odd"},
//       type: 'survey-text',
//       questions: [
//         {prompt: 'Enter the numbers in the order of presentation',  columns: 12}
//       ],
//       button_label: 'Submit response',
//       on_finish: function(data){
//           data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
//           jsPsych.data.getLastTrialData().values()[0].responses[8] +
//           jsPsych.data.getLastTrialData().values()[0].responses[9] +
//           jsPsych.data.getLastTrialData().values()[0].responses[10];
//         // },
//         if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
//           data.accuracy = 1;
//           // list_count += 1;
//           // data.list_count += 1;
//           next_list = 1;
//           // data.next_list = 1;
//           do_2nd_pres = 0;
//           // data.do_2nd_pres = 0;
//         } else {
//           data.accuracy = 0;
//           do_2nd_pres = 1;
//           // data.do_2nd_pres = 1;
//           next_list = 0;
//         }
//       }
//     }
//
//     var FWDS_trial_1 = {
//       timeline: [instructions_FWDS, trial1_FWDS_audio, trial1_FWDS_resp]
//     }
//
//
//     var trial2_FWDS_audio = {
//       on_start: function() {
//           console.log("TRIAL 2: do_2nd_pres? " + do_2nd_pres)
//           console.log("TRIAL 2: next list? " + next_list)
//       },
//       type: 'audio-keyboard-response-simple',
//       data: {screen_id: "audio_out", nr_items:4, speaker:35, correct_response: "7286", odd_even: "even"},
//       stimulus: stimDir_FWDS + "originalFWDS_list2.wav",
//       prompt: "<div style='font-size: 60px'><b>+</b></div>",
//       trial_ends_after_audio: true
//     };
//
//     var trial2_FWDS_resp = {
//       on_start: function(data) {
//         data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
//           // console.log("TRIAL 2: do_2nd_pres? " + do_2nd_pres)
//           // console.log("TRIAL 2: next list? " + next_list)
//       },
//       data: {screen_id: "audio_out", nr_items:4, speaker:35, correct_response: "7286", odd_even: "even"},
//       type: 'survey-text',
//       questions: [
//         {prompt: 'Enter the numbers in the order of presentation',  columns: 12}
//       ],
//       button_label: 'Submit response',
//       on_finish: function(data){
//           data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
//           jsPsych.data.getLastTrialData().values()[0].responses[8] +
//           jsPsych.data.getLastTrialData().values()[0].responses[9] +
//           jsPsych.data.getLastTrialData().values()[0].responses[10];
//         // }
//         if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
//           data.accuracy = 1;
//           // list_count += 1;
//           // data.list_count += 1;
//           next_list = 1;
//           do_2nd_pres = 0;
//           // data.next_list = 1;
//         } else {
//           data.accuracy = 0;
//           do_2nd_pres = 0;
//           next_list = 0;
//         }
//       }
//     }
//
//     var FWDS_trial_2 = {
//       chunk_type: 'if',
//       conditional_function: function() {
//         if(do_2nd_pres == 0) {
//           return false;
//         } else {
//           return true;
//         }
//       },
//       timeline: [trial2_FWDS_audio, trial2_FWDS_resp]
//     }
//
//
//     var trial3_FWDS_audio = {
//       on_start: function() {
//           console.log("TRIAL 3: do_2nd_pres? " + do_2nd_pres)
//           console.log("TRIAL 3: next list? " + next_list)
//       },
//       type: 'audio-keyboard-response-simple',
//       data: {screen_id: "audio_out", nr_items:5, speaker:35, correct_response: "42731", odd_even: "odd"},
//       stimulus: stimDir_FWDS + "originalFWDS_list3.wav",
//       prompt: "<div style='font-size: 60px'><b>+</b></div>",
//       trial_ends_after_audio: true
//     };
//
//     var trial3_FWDS_resp = {
//       on_start: function(data) {
//         data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
//           list_count = 0;
//           next_list = 0;
//           // console.log("TRIAL 3: do_2nd_pres? " + do_2nd_pres)
//           // console.log("TRIAL 3: next list? " + next_list)
//       },
//       data: {screen_id: "audio_out", nr_items:5, speaker:35, correct_response: "42731", odd_even: "odd"},
//       type: 'survey-text',
//       questions: [
//         {prompt: 'Enter the numbers in the order of presentation',  columns: 12}
//       ],
//       button_label: 'Submit response',
//       on_finish: function(data){
//           data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
//           jsPsych.data.getLastTrialData().values()[0].responses[8] +
//           jsPsych.data.getLastTrialData().values()[0].responses[9] +
//           jsPsych.data.getLastTrialData().values()[0].responses[10] +
//           jsPsych.data.getLastTrialData().values()[0].responses[11];
//         // },
//         if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
//           data.accuracy = 1;
//           // list_count += 1;
//           // data.list_count += 1;
//           next_list = 1;
//           // data.next_list = 1;
//           do_2nd_pres = 0;
//           // data.do_2nd_pres = 0;
//         } else {
//           data.accuracy = 0;
//           do_2nd_pres = 1;
//           // data.do_2nd_pres = 1;
//           next_list = 0;
//         }
//       }
//     }
//
//     var FWDS_trial_3 = {
//       chunk_type: 'if',
//       conditional_function: function() {
//         if(next_list == 0) {
//           return false;
//         } else {
//           return true;
//         }
//       },
//       timeline: [trial3_FWDS_audio, trial3_FWDS_resp]
//     }
//
//     FWDS_timeline.timeline.push(instructions_DS);
//     FWDS_timeline.timeline.push(FWDS_trial_1);
//     FWDS_timeline.timeline.push(FWDS_trial_2);
//     FWDS_timeline.timeline.push(FWDS_trial_3);
//     // timeline.push(FWDS_timeline);
// ////////////////////////////////////////////////////////////////////////////////
//
//
//
// ////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////// BWDS ///////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////
//       next_list = 0;
//       do_2nd_pres = 0;
//
//       var stimDir_BWDS = "../../stimuli/digitSpan/BWDS/";
//
//       var instructions_BWDS = {
//         data: {screen_id: "instructions_BWDS"},
//         type: 'html-button-response',
//         stimulus: 'Please enter the digit you heard IN REVERSED ORDER.',
//         choices: ['Continue']
//       }
//
//       var trial1_BWDS_audio = {
//         on_start: function() {
//             console.log("TRIAL 1: do_2nd_pres? " + do_2nd_pres)
//             console.log("TRIAL 1: next list? " + next_list)
//         },
//         type: 'audio-keyboard-response-simple',
//         data: {screen_id: "audio_out", nr_items:3, speaker:35, input: "263", correct_response: "362", odd_even: "odd"},
//         stimulus: stimDir_BWDS + "originalBWDS_list1.wav",
//         prompt: "<div style='font-size: 60px'><b>+</b></div>",
//         trial_ends_after_audio: true
//       };
//
//       var trial1_BWDS_resp = {
//         on_start: function(data) {
//           data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
//             // data.list_count = 0;
//             // data.next_list = 0;
//             // console.log("TRIAL 1: do_2nd_pres? " + do_2nd_pres)
//             // console.log("TRIAL 1: next list? " + next_list)
//         },
//         data: {screen_id: "audio_out", nr_items:3, speaker:35, input: "263", correct_response: "362", odd_even: "odd"},
//         type: 'survey-text',
//         questions: [
//           {prompt: 'Enter the numbers in reversed order',  columns: 12}
//         ],
//         button_label: 'Submit response',
//         on_finish: function(data){
//             data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
//             jsPsych.data.getLastTrialData().values()[0].responses[8] +
//             jsPsych.data.getLastTrialData().values()[0].responses[9];
//           // },
//           if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
//             data.accuracy = 1;
//             // list_count += 1;
//             // data.list_count += 1;
//             next_list = 1;
//             // data.next_list = 1;
//             do_2nd_pres = 0;
//             // data.do_2nd_pres = 0;
//           } else {
//             data.accuracy = 0;
//             do_2nd_pres = 1;
//             // data.do_2nd_pres = 1;
//             next_list = 0;
//           }
//         }
//       }
//
//       var BWDS_trial_1 = {
//         timeline: [instructions_BWDS, trial1_BWDS_audio, trial1_BWDS_resp]
//       };
//
//       var trial2_BWDS_audio = {
//         on_start: function() {
//             console.log("TRIAL 2: do_2nd_pres? " + do_2nd_pres)
//             console.log("TRIAL 2: next list? " + next_list)
//         },
//         type: 'audio-keyboard-response-simple',
//         data: {screen_id: "audio_out", nr_items:3, speaker:35, input:"415", correct_response: "514", odd_even: "even"},
//         stimulus: stimDir_BWDS + "originalBWDS_list2.wav",
//         prompt: "<div style='font-size: 60px'><b>+</b></div>",
//         trial_ends_after_audio: true
//       };
//
//       var trial2_BWDS_resp = {
//         on_start: function(data) {
//           data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
//             // console.log("TRIAL 2: do_2nd_pres? " + do_2nd_pres)
//             // console.log("TRIAL 2: next list? " + next_list)
//         },
//         data: {screen_id: "audio_out", nr_items:3, speaker:35, input:"415", correct_response: "514", odd_even: "even"},
//         type: 'survey-text',
//         questions: [
//           {prompt: 'Enter the numbers in the order of presentation',  columns: 12}
//         ],
//         button_label: 'Submit response',
//         on_finish: function(data){
//             data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
//             jsPsych.data.getLastTrialData().values()[0].responses[8] +
//             jsPsych.data.getLastTrialData().values()[0].responses[9];
//           // }
//           if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
//             data.accuracy = 1;
//             // list_count += 1;
//             // data.list_count += 1;
//             next_list = 1;
//             do_2nd_pres = 0;
//             // data.next_list = 1;
//           } else {
//             data.accuracy = 0;
//             do_2nd_pres = 0;
//             next_list = 0;
//           }
//         }
//       }
//
//       var BWDS_trial_2 = {
//         chunk_type: 'if',
//         conditional_function: function() {
//           if(do_2nd_pres == 0) {
//             return false;
//           } else {
//             return true;
//           }
//         },
//         timeline: [trial2_BWDS_audio, trial2_BWDS_resp]
//       }
//
//
//       var trial3_BWDS_audio = {
//         on_start: function() {
//             console.log("TRIAL 3: do_2nd_pres? " + do_2nd_pres)
//             console.log("TRIAL 3: next list? " + next_list)
//         },
//         type: 'audio-keyboard-response-simple',
//         data: {screen_id: "audio_out", nr_items:4, speaker:35, input:"3279", correct_response: "9723", odd_even: "odd"},
//         stimulus: stimDir_BWDS + "originalBWDS_list3.wav",
//         prompt: "<div style='font-size: 60px'><b>+</b></div>",
//         trial_ends_after_audio: true
//       };
//
//       var trial3_BWDS_resp = {
//         on_start: function(data) {
//           data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
//             // list_count = 0;
//             next_list = 0;
//             // console.log("TRIAL 3: do_2nd_pres? " + do_2nd_pres)
//             // console.log("TRIAL 3: next list? " + next_list)
//         },
//         data: {screen_id: "audio_out", nr_items:4, speaker:35, input:"3279", correct_response: "9723", odd_even: "odd"},
//         type: 'survey-text',
//         questions: [
//           {prompt: 'Enter the numbers in the order of presentation',  columns: 12}
//         ],
//         button_label: 'Submit response',
//         on_finish: function(data){
//             data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
//             jsPsych.data.getLastTrialData().values()[0].responses[8] +
//             jsPsych.data.getLastTrialData().values()[0].responses[9] +
//             jsPsych.data.getLastTrialData().values()[0].responses[10];
//           // },
//           if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
//             data.accuracy = 1;
//             // list_count += 1;
//             // data.list_count += 1;
//             next_list = 1;
//             // data.next_list = 1;
//             do_2nd_pres = 0;
//             // data.do_2nd_pres = 0;
//           } else {
//             data.accuracy = 0;
//             do_2nd_pres = 1;
//             // data.do_2nd_pres = 1;
//             next_list = 0;
//           }
//         }
//       }
//
//       var BWDS_trial_3 = {
//         chunk_type: 'if',
//         conditional_function: function() {
//           if(next_list == 0) {
//             return false;
//           } else {
//             return true;
//           }
//         },
//         timeline: [trial3_BWDS_audio, trial3_BWDS_resp]
//       }
//
//       BWDS_timeline.timeline.push(BWDS_trial_1);
//       BWDS_timeline.timeline.push(BWDS_trial_2);
//       BWDS_timeline.timeline.push(BWDS_trial_3);
//       // timeline.push(BWDS_timeline);
//
//
// ////////////////////////////////////////////////////////////////////////////////
// ////////////////////////// Word Rec SiN ////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////
// var instructions_wordRec = {
//   data: {screen_id: "instructions_wordRec"},
//   type: 'html-button-response',
//   stimulus: "<p>PART 5: WORD RECOGNITION. Insert instructions here.</p>",
//   choices: ['Continue'],
//   on_finish: function() {
//     console.log("INSTRUCTIONS WORD REC")
//   }
// };
// // wordRec_instructions_timeline.timeline = instructions_wordRec;
// // timeline.push(wordRec_instructions_timeline);
//
// var instructions_wordRec_SiN = {
//   data: {screen_id: "instructions_SiNRT"},
//   type: 'html-button-response',
//   stimulus: "<p>As part of this test, you will hear some words in German" +
//   " that are difficult to unserdtand because they are embedded in noise.</p>" +
//   "<p>Your task is to repeat aloud the word heard when you are prompted to do so.</p>" +
//   "<p>The fixation cross indicates that a word is being presented and a red " +
//   " 'recording dot' indicates that you should repeat the word.</p>" +
//   "<p>When you are not sure, please try to guess.</p>" +
//   "<p>If you really have no idea about what was said, please say 'Keine Anhung'.</p>" +
//   "<p>Press 'Continue' to start the test.</p>" +
//   "<p>NOTE : the script is initialised with the `use_webaudio` parameter" +
//   "of jspsych.init set to `false` for testing on local machine; "  +
//   "remember to change for testing on server</p>",
//   choices: ['Continue'],
//   on_finish: function(data){
//           }
// };
//
// var stimDir_SiNwords_list1 = "../../stimuli/wordRec/SiN/0dB_SNR/List1/";
//
// var start_wordRecSiN = {
//   data: {screen_id: "start_wordRecSiN"},
//   type: 'html-button-response',
//   stimulus: "<p>Click 'Start Test' to get started</p>",
//   choices: ['Start Test'],
//   on_finish: function(data){
//           }
// };
// // timeline.push(start_wordRecSiN);
//
// var stimuli_list1SiN = [
//   {stimulus_list1SiN: stimDir_SiNwords_list1 + "Affe.wav", data_list1SiN: {screen_id: audioOut_list1SiN, dB_SNR:0, word_id: "Affe"}},
//   {stimulus_list1SiN: stimDir_SiNwords_list1 + "Bogen.wav", data_list1SiN: {screen_id: audioOut_list1SiN, dB_SNR:0, word_id: "Bogen"}},
//   {stimulus_list1SiN: stimDir_SiNwords_list1 + "Bohne.wav", data_list1SiN: {screen_id: audioOut_list1SiN, dB_SNR:0, word_id: "Bohne"}}
// ];
//
// var preAudio_wordRecSiN = {
//   data: {screen_id: "preAudio_wordRecSiN"},
//   type: 'html-button-response',
//   stimulus: "<p>Click 'Play' to hear the word</p>",
//   choices: ['Play']
// };
//
// var audioOut_list1SiN = {
//   // type: 'audio-keyboard-response-simple',
//   type: 'audio-button-response-simple',
//   data: jsPsych.timelineVariable("data_list1SiN"),
//   stimulus: jsPsych.timelineVariable("stimulus_list1SiN"),
//   // trial_ends_after_audio: true
//   choices: ['record'],
// };
//
// var audioIn_list1SiN = {
//     // type: "image-audio-response-II",
//     type: "download-audio",
//     choices: ['Stop']
// };
//
// var procedure_list1SiN = {
//   timeline: [preAudio_wordRecSiN, audioOut_list1SiN, audioIn_list1SiN],
//   timeline_variables: stimuli_list1SiN,
//   randomize_order: true
// };
//
// /////// PUSH wordRec TRIALS TO ITS TIMELINE ///////////
//     wordRecSiN_timeline.timeline.push(instructions_wordRec_SiN);
//     wordRecSiN_timeline.timeline.push(start_wordRecSiN);
//     wordRecSiN_timeline.timeline.push(procedure_list1SiN);
//     // timeline.push(wordRecSiN_timeline);
// ////////////////////////////////////////////////////////////////////////////////
//
//
//
//
// ////////////////////////////////////////////////////////////////////////////////
// ////////////////////////// Word Rec NVS ////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////
// var instructions_wordRec_NVS = {
//   data: {screen_id: "instructions_NVSRT"},
//   type: 'html-button-response',
//   stimulus: "<p>As part of this test, you will hear some words in German" +
//   " that are difficult to unserdtand because they are embedded in noise.</p>" +
//   "<p>Your task is to repeat aloud the word heard when you are prompted to do so.</p>" +
//   "<p>The fixation cross indicates that a word is being presented and a red " +
//   " 'recording dot' indicates that you should repeat the word.</p>" +
//   "<p>When you are not sure, please try to guess.</p>" +
//   "<p>If you really have no idea about what was said, please say 'Keine Anhung'.</p>" +
//   "<p>Press 'Continue' to start the test.</p>" +
//   "<p>NOTE : the script is initialised with the `use_webaudio` parameter" +
//   "of jspsych.init set to `false` for testing on local machine; "  +
//   "remember to change for testing on server</p>",
//   choices: ['Continue'],
//   on_finish: function(data){
//           }
// };
//
// var stimDir_NVSwords_list1 = "../../stimuli/wordRec/NVS/5chan/List1/";
//
// var start_wordRecNVS = {
//   data: {screen_id: "start_wordRecNVS"},
//   type: 'html-button-response',
//   stimulus: "<p>Click 'Start Test' to get started</p>",
//   choices: ['Start Test'],
//   on_finish: function(data){
//           }
// };
// // timeline.push(start_wordRecNVS);
//
// var stimuli_list1NVS = [
//   {stimulus_list1NVS: stimDir_NVSwords_list1 + "Bank.wav", data_list1NVS: {screen_id: audioOut_list1NVS, nrNvChan:5, word_id: "Bank"}},
//   {stimulus_list1NVS: stimDir_NVSwords_list1 + "Baum.wav", data_list1NVS: {screen_id: audioOut_list1NVS, nrNvChan:5, word_id: "Baum"}},
//   {stimulus_list1NVS: stimDir_NVSwords_list1 + "Birne.wav", data_list1NVS: {screen_id: audioOut_list1NVS, nrNvChan:5, word_id: "Birne"}}
// ];
//
// var preAudio_wordRecNVS = {
//   data: {screen_id: "preAudio_wordRecNVS"},
//   type: 'html-button-response',
//   stimulus: "<p>Click 'Play' to hear the word</p>",
//   choices: ['Play']
// };
//
// var audioOut_list1NVS = {
//   // type: 'audio-keyboard-response-simple',
//   type: 'audio-button-response-simple',
//   data: jsPsych.timelineVariable("data_list1NVS"),
//   stimulus: jsPsych.timelineVariable("stimulus_list1NVS"),
//   // trial_ends_after_audio: true
//   choices: ['record'],
// };
//
// var audioIn_list1NVS = {
//     // type: "image-audio-response-II",
//     type: "download-audio",
//     choices: ['Stop']
// };
//
// var procedure_list1NVS = {
//   timeline: [preAudio_wordRecNVS, audioOut_list1NVS, audioIn_list1NVS],
//   timeline_variables: stimuli_list1NVS,
//   randomize_order: true
// };
// // timeline.push(procedure_list1NVS);
//
// /////// PUSH wordRec TRIALS TO ITS TIMELINE ///////////
//     wordRecNVS_timeline.timeline.push(instructions_wordRec_NVS);
//     wordRecNVS_timeline.timeline.push(start_wordRecNVS);
//     wordRecNVS_timeline.timeline.push(procedure_list1NVS);
//     // timeline.push(wordRecNVS_timeline);
// ////////////////////////////////////////////////////////////////////////////////
//
//
// ////////////////////////// randomise SiN and NVS ///////////////////////////////
// var randomizedWordRecBlocks = jsPsych.randomization.shuffle([wordRecSiN_timeline, wordRecNVS_timeline]);
//
//   // wordRec_timeline.timeline = [instructions_wordRec, randomizedWordRecBlocks];
//   wordRec_timeline.timeline = randomizedWordRecBlocks;
//   // timeline.push(wordRec_timeline);
// ////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////////
//////////////////////// START EXPERIMENT //////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function startExpDEMO() {
  console.log("startExp reached")
  /* start the experiment */
  jsPsych.init({
    // timeline: timeline,
    timeline: welcome,
    // timeline: [calib_timeline, TT_timeline, instructions_SRT, SRT_timeline,
    // FWDS_timeline, BWDS_timeline, instructions_wordRec, wordRec_timeline],
    use_webaudio: false,
    // on_interaction_data_update: function(data) {
    //   var trial = jsPsych.currentTrial();
    //   trial.data.event = data.event;
    // },
    on_finish: function() {
      $.ajax({
        type: "POST",
        url: "/experiment-data",
        data: JSON.stringify(jsPsych.data.get().values()),
        contentType: "application/json"
      })

      .done(function(){
        window.location.href = "finish";
        // alert("You have completed the experiment and the data have been saved!");
      })

      .fail(function(){
        alert("Problem occurred while writing data to Dropbox. " +
              "Data will be saved to your computer. " +
              "Please cpontact the experimenter!");
        var csv = jsPsych.data.get().csv();
        var filename = "ACexp_part" + jsPsych.data.get().values()[0].part_ID + "_" + DATE + ".csv";
        // var filename = "ACexp_part" + jsPsych.data.get().values()[0].Part_ID + "_" + " + DATE + " + ".csv";
        downloadCSV(csv,filename);
        window.location.href = "finish";
      })

      // jsPsych.data.displayData();
    }
  });
};
