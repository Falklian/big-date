# Friday November 14 2014  8:43 AM
# %A     %B       %d %Y    %l%M %p
command: "date '+%A %B %d %Y %l:%M %p'"

# Refresh every 1 second
refreshFrequency: 1000

render: (_) -> """
  <link href='http://fonts.googleapis.com/css?family=Open+Sans:300,600' rel='stylesheet' type='text/css'>
  <div class="left"></div>
  <div class="right"></div>
"""

update: (output, domEl) ->
  # Friday November 14 2014  8:43 AM
  # [1]    [2]      [3][4]   [5]  [6]
  match = /^(\w*?)\s(\w*?)\s(\d{1,2})\s(\d{4})\s{1,2}(\d{1,2}:\d{2}) ([a|p]m)/i.exec output

  $(domEl).find('.left').html """
    #{match[1].toUpperCase()}<br />
    #{match[2].toUpperCase()}<br />
    <span>#{match[5].toUpperCase()}</span>
  """

  $(domEl).find('.right').html """
    <span>#{match[3].toUpperCase()}</span><br />
    #{match[4].toUpperCase()}<br />
    #{match[6].toUpperCase()}
  """

style: """
  top: 10px
  left: 10px
  line-height: .85em
  font-size: 4em
  font-family: 'Open sans', sans-serif
  text-shadow: 2px 2px 5px #000
  color: #fff

  .left
    text-align: right
    float: left

  .right
    padding-left: .2em
    float: left

  div
    font-weight: 300

  span
    color: #a9a9a9
    font-weight: 600
"""
