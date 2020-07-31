export function post(url, data) {
  const xhr = new XMLHttpRequest()

  xhr.open('POST', url, true)
  xhr.setRequestHeader('Content-Type', 'application/json')

  const promise = new Promise((resolve) => {
    function onReadyStateChange() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        resolve(xhr.responseText)
      }
    }

    xhr.onreadystatechange = onReadyStateChange
  })

  xhr.send(JSON.stringify({
    ...data,
  }))

  return promise
}
