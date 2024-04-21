function Random()
{
    let num = Math.random() * 100;

    return <div>
      <h1 style={{
        'backgroundColor' : 'beige',
        'color' : 'blue'
      }}>
      My random number is : {Math.round(num)};
      </h1>
    </div>
}

export default Random;

// always use 2 brackets in inline css. 
